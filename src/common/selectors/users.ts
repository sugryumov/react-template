import { IState } from 'interfaces';

export const getUsersData = (state: IState) => state.users.response;

export const getUsersLoading = (state: IState) => state.users.loading;

export const getUsersError = (state: IState) => state.users.error;
