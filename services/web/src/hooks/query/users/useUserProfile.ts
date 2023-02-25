import { useQuery } from '@tanstack/react-query';

import { getUserProfile } from '@/src/apis';

import { key } from '../key';

export const useUserProfileQuery = () =>
  useQuery(key.users.myProfile(), () => getUserProfile().then((data) => data));
