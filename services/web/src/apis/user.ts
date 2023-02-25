import { API_SUFFIX } from '../constants';
import { instace, APIResponse } from './instance';

export interface UserProfileResponse {
  id: string;
  nickname: string;
  image: string;
  department: string;
  grade: string;
  class: string;
  number: string;
  birthday: string;
}

export const getUserProfile = async (): Promise<
  APIResponse<UserProfileResponse>
> => {
  const { data } = await instace.get<APIResponse<UserProfileResponse>>(
    API_SUFFIX.USER_PROFILE
  );

  return data;
};
