import { IFetchPhotos } from 'component/Photos/store/entities';
import { IFetchUsers } from 'component/Users/store/entities';

export interface IState {
  photos: IFetchPhotos;
  users: IFetchUsers;
}
