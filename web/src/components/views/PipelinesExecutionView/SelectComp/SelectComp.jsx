import React, { useContext, useState } from 'react';
import { bool, shape, string } from 'prop-types';
import useDropdown from 'customHooks/useDropdown';
import validateInput from 'functions/validations';
import MTooltip from 'components/ui/MTooltip';
import ArrowButton from 'components/ui/MArrowButton/arrowButton';
import { DataPipelinesContext } from '../DataPipelineHooks/DataPipelinesProvider';
import ErrorsDiv from '../SortableDataProcessorsList/ErrorsDiv';
import { VALIDATE_FORM } from '../DataPipelineHooks/actions';
import './SelectComp.scss';

export const SelectComp = ({
  param,
  isBoolean,
  dataProcessorId,
  index,
}) => {
  let options;
  let defaultValue;
  const [, dispatch] = useContext(DataPipelinesContext);
  const [dropDownRef, toggleShow, isDropdownOpen] = useDropdown();
  if (isBoolean) {
    defaultValue = param.value || param.default_value;
    options = [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' },
    ];
  } else {
    // default_value is used in list fields to persist the options ofr user
    options = JSON.parse(param.default_value);
    defaultValue = param.value || '';
  }
  options = [{ label: 'Select..', value: '' }, ...options];
  const [value, setValue] = useState(defaultValue);
  const [placeHolder, setPlaceHolder] = useState(value || 'Select..');
  const [hasErrors, setHasErrors] = useState(false);

  function handleSelectClick(opt) {
    setPlaceHolder(opt.label || opt.value);
    setValue(opt.value);
    const isValid = validateInput(opt.value, param.type, param.required);
    setHasErrors(!isValid);
    dispatch({
      type: 'UPDATE_PARAM_VALUE_IN_DATA_OPERATOR',
      newParamValue: opt.value,
      paramName: param.name,
      procSelectedId: dataProcessorId,
      index,
      isValid,
    });
    dispatch({ type: VALIDATE_FORM });
  }

  return (
    <>
      <div className="select-comp d-flex mb-3">
        <span className="mr-auto" style={{ alignSelf: 'center', padding: '0rem 1rem' }}>
          {param.description && (
            <MTooltip
              scale={120}
              className="mr-1"
              message={param.description}
            />
          )}
          {`${param.name}: `}
        </span>
        <div className="dropdown" ref={dropDownRef}>
          <input
            style={{ display: 'none' }}
            value={value}
            onChange={() => {}}
          />
          <ArrowButton
            placeholder={placeHolder}
            buttonStyle={{ width: '16ch', display: 'flex', justifyContent: 'space-evenly' }}
            initialIsOpened={isDropdownOpen}
            callback={() => toggleShow()}
          />
          {isDropdownOpen && (
            <ul style={{ zIndex: 1 }}>
              {options.map((opt) => (
                <li
                  key={opt.value}
                  className="d-flex"
                >
                  <button
                    type="button"
                    onClick={() => handleSelectClick(opt)}
                  >
                    {opt.label ? opt.label : opt.value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {hasErrors && (<ErrorsDiv typeOfField={param.type} />)}
    </>
  );
};

SelectComp.propTypes = {
  param: shape({
    default_value: string,
    description: string.isRequired,
    name: string.isRequired,
    type: string.isRequired,
  }),
  isBoolean: bool.isRequired,
};

SelectComp.defaultProps = {
  param: { default_value: '' },
};

export default SelectComp;
