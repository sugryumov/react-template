import { IState } from 'interfaces';

export const getPhotosData = (state: IState) => state.photos.response;

export const getPhotosLoading = (state: IState) => state.photos.loading;

export const getPhotosError = (state: IState) => state.photos.error;
