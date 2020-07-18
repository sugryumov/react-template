import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces';
import { fetchUsersAction } from './store/actions';
import {
  getUsersData,
  getUsersLoading,
  getUsersError,
} from 'common/selectors/users';
import UserItem from './components/UserItem';
import './index.css';

function UsersContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction.request());
  }, [dispatch]);

  const { users, loading, error } = useSelector((state: IState) => ({
    users: getUsersData(state),
    loading: getUsersLoading(state),
    error: getUsersError(state),
  }));

  return (
    <main className="users">
      <Helmet title={'Users'} />
      <UserItem users={users} loading={loading} error={error} />
    </main>
  );
}

export default UsersContainer;
