export const endpoints = {
  signIn: () => `/api/auth/sign-in`,
  createEducation: () => `/api/education/create`,
  updateEducation: (educationId: string) =>
    `/api/education/${educationId}/update`,
  deleteEducation: (educationId: string) =>
    `/api/education/${educationId}/delete`,
  getAllEducations: () => `/api/education/get-all`,
  getUser: () => `/api/user/get-user`,
  updateUser: () => `/api/user/update-info`,
  createProject: () => `/api/project/create`,
  updateProject: (projectId: string) => `/api/project/${projectId}/update`,
  deleteProject: (projectId: string) => `/api/project/${projectId}/delete`,
  getAllProjects: () => `/api/project/get-all`,
};
