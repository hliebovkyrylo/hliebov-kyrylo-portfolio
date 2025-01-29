import { CreateEducationInput } from "@/schemas/createEducationSchema";
import { SignInResult } from "../services/authService";
import { SuccessResponse } from "../utils/apiResponse";
import { endpoints } from "./endpoints";
import axios from "axios";
import { UpdateUserInput } from "@/schemas/updateUserSchema";
import { Education, Project } from "@prisma/client";
import { GetUserResult } from "../services/userService";

export const api = {
  signIn: () => {
    return axios.post<SuccessResponse<SignInResult>>(endpoints.signIn());
  },
  createEducation: (data: CreateEducationInput) => {
    return axios.post<SuccessResponse<Education>>(
      endpoints.createEducation(),
      data
    );
  },
  updateEducation: (educationId: string, data: CreateEducationInput) => {
    return axios.put<SuccessResponse<Education>>(
      endpoints.updateEducation(educationId),
      data
    );
  },
  deleteEducation: (educationId: string) => {
    return axios.delete<SuccessResponse<string>>(
      endpoints.deleteEducation(educationId)
    );
  },
  getAllEducations: () => {
    return axios.get<SuccessResponse<Education[]>>(
      endpoints.getAllEducations()
    );
  },
  getUser: () => {
    return axios.get<SuccessResponse<GetUserResult>>(endpoints.getUser());
  },
  updateUser: (data: UpdateUserInput) => {
    return axios.put<SuccessResponse<GetUserResult>>(
      endpoints.updateUser(),
      data
    );
  },
  createProject: (data: CreateEducationInput) => {
    return axios.post<SuccessResponse<Project>>(
      endpoints.createProject(),
      data
    );
  },
  updateProject: (projectId: string, data: CreateEducationInput) => {
    return axios.put<SuccessResponse<Project>>(
      endpoints.updateProject(projectId),
      data
    );
  },
  deleteProject: (projectId: string) => {
    return axios.delete<SuccessResponse<string>>(
      endpoints.deleteProject(projectId)
    );
  },
  getAllProjects: () => {
    return axios.get<SuccessResponse<Project[]>>(endpoints.getAllProjects());
  },
};
