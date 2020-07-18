import React from 'react';

type TUserItem = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  company: {};
  address: {};
};

type TUsers = {
  users: Array<TUserItem>;
  loading: boolean;
  error: null | Error;
};

function UserItem({ users, loading, error }: TUsers) {
  console.log('users', users);

  const renderUsers = () => {
    return users.map((user: TUserItem) => {
      return <p key={user.id}>{user.name}</p>;
    });
  };

  return (
    <>
      <h1>Users</h1>

      {loading ? 'Loading...' : error ? 'Ошибка' : renderUsers()}
    </>
  );
}

export default UserItem;
