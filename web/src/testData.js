export const imagesToRender = [
  {
    commitId: 'd80ab8ff15fb1f327bac0f5679b454cbec247759',
    parentCommitId: '6819ee9d2e8f7796887cc87af2d396c9894a2ebf',
    previousImage: {},
    nextImage: {},
    fileName: 'color_0_0054_A.png',
  },
];

export const mockMatchDataCommitDet = {
  path: '/my-projects/:projectId/commit/:commitId',
  url: '/my-projects/12395599/commit/aede036f526ea5d591f5ee56c131ed8472483912',
  isExact: true,
  params: {
    projectId: '12395599',
    commitId: 'aede036f526ea5d591f5ee56c131ed8472483912',
  },
};

export const commitMockObject = {
  id: 'd80ab8ff15fb1f327bac0f5679b454cbec247759',
  short_id: 'd80ab8ff',
  created_at: '2019-11-09T14:24:40.000Z',
  parent_ids: [
    '6819ee9d2e8f7796887cc87af2d396c9894a2ebf',
  ],
  title: 'Replace color_0_0054_A.png',
  message: 'Replace color_0_0054_A.png',
  author_name: 'cpmlreef',
  author_email: 'cp@mlreef.com',
  authored_date: '2019-11-09T14:24:40.000Z',
  committer_name: 'cpmlreef',
  committer_email: 'cp@mlreef.com',
  committed_date: '2019-11-09T14:24:40.000Z',
  stats: {
    additions: 0,
    deletions: 0,
    total: 0,
  },
  status: null,
  last_pipeline: null,
  project_id: 14448940,
};

export const mockDiffArray = [
  {
    old_path: 'showcase/color_0_0054_A.png',
    new_path: 'showcase/color_0_0054_A.png',
    a_mode: '100644',
    b_mode: '100644',
    new_file: false,
    renamed_file: false,
    deleted_file: false,
    diff: 'Binary files a/showcase/color_0_0054_A.png and b/showcase/color_0_0054_A.png differ\n',
  },
];

export const mockPropsForCommitDetails = {
  projects: {
    all: [
      {
        id: 14448940,
        description: 'Categorical Classification of alphabets in the American Sign Language',
        name: 'Sign Language Classifier',
        name_with_namespace: 'MLReef / Sign Language Classifier',
        path: 'sign-language-classifier',
        path_with_namespace: 'mlreef/sign-language-classifier',
        created_at: '2019-09-23T08:51:23.983Z',
        default_branch: 'master',
        tag_list: [],
        ssh_url_to_repo: 'git@gitlab.com:mlreef/sign-language-classifier.git',
        http_url_to_repo: 'https://gitlab.com/mlreef/sign-language-classifier.git',
        web_url: 'https://gitlab.com/mlreef/sign-language-classifier',
        readme_url: 'https://gitlab.com/mlreef/sign-language-classifier/blob/master/README.md',
        avatar_url: 'https://gitlab.com/uploads/-/system/project/avatar/14448940/proxy.duckduckgo.png',
        star_count: 0,
        forks_count: 0,
        last_activity_at: '2019-11-10T15:14:17.804Z',
        namespace: {
          id: 5351747,
          name: 'MLReef',
          path: 'mlreef',
          kind: 'group',
          full_path: 'mlreef',
          parent_id: null,
          avatar_url: '/uploads/-/system/group/avatar/5351747/MLReef_Logo_POS_H_icon-01.png',
          web_url: 'https://gitlab.com/groups/mlreef',
        },
      },
    ],
    selectedProject: {
      id: 12395599,
      description: 'This is MLReef´s demo repository.',
      name: 'demo',
      name_with_namespace: 'MLReef / demo',
      path: 'mlreef-demo',
      path_with_namespace: 'mlreef/mlreef-demo',
      created_at: '2019-05-18T09:34:29.346Z',
      default_branch: 'master',
      tag_list: [],
      ssh_url_to_repo: 'git@gitlab.com:mlreef/mlreef-demo.git',
      http_url_to_repo: 'https://gitlab.com/mlreef/mlreef-demo.git',
      web_url: 'https://gitlab.com/mlreef/mlreef-demo',
      readme_url: 'https://gitlab.com/mlreef/mlreef-demo/blob/master/README.md',
      avatar_url: 'https://gitlab.com/uploads/-/system/project/avatar/12395599/shutterstock_129655604-Converted-copy-text.png',
      star_count: 2,
      forks_count: 1,
      last_activity_at: '2019-11-11T10:36:06.189Z',
      namespace: {
        id: 5351747,
        name: 'MLReef',
        path: 'mlreef',
        kind: 'group',
        full_path: 'mlreef',
        parent_id: null,
        avatar_url: '/uploads/-/system/group/avatar/5351747/MLReef_Logo_POS_H_icon-01.png',
        web_url: 'https://gitlab.com/groups/mlreef',
      },
    },
  },
  users: [
    {
      id: 3839940,
      name: 'cpmlreef',
      username: 'cpmlreef',
      state: 'active',
      avatar_url: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/3839940/avatar.png',
      web_url: 'https://gitlab.com/cpmlreef',
    },
  ],
};
