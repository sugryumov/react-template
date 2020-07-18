import { createAsyncAction } from 'typesafe-actions';

export const FETCH_PHOTOS_REQUESTED = '@photos/FETCH_PHOTOS_REQUESTED';
export const FETCH_PHOTOS_SUCCEEDED = '@photos/FETCH_PHOTOS_SUCCEEDED';
export const FETCH_PHOTOS_FAILED = '@photos/FETCH_PHOTOS_FAILED';

export const fetchPhotosAction = createAsyncAction(
  FETCH_PHOTOS_REQUESTED,
  [FETCH_PHOTOS_SUCCEEDED, (data: any) => data],
  [FETCH_PHOTOS_FAILED, (error: Error | null) => error],
)();
