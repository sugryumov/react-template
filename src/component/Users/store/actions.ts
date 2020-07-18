import { createAsyncAction } from 'typesafe-actions';

export const FETCH_USER_REQUESTED = '@users/FETCH_USER_REQUESTED';
export const FETCH_USER_SUCCEEDED = '@users/FETCH_USER_SUCCEEDED';
export const FETCH_USER_FAILED = '@users/FETCH_USER_FAILED';

export const fetchUsersAction = createAsyncAction(
  FETCH_USER_REQUESTED,
  [FETCH_USER_SUCCEEDED, (data: any) => data],
  [FETCH_USER_FAILED, (error: Error | null) => error],
)();
