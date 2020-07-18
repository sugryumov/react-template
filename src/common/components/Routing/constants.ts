import { Paths as P } from 'enums/routes';
import Home from 'component/Home';
import PhotosContainer from 'component/Photos';
import UsersContainer from 'component/Users';

export const pages = [
  {
    component: Home,
    path: P.home,
    exact: true,
  },
  {
    component: UsersContainer,
    path: P.users,
  },
  {
    component: PhotosContainer,
    path: P.photos,
  },
];
