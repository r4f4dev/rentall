import React from 'react';
import UserLayout from '../../components/Layout/UserLayout';
import TransactionContainer from './TransactionContainer';

const title = 'Transaction History';

export default function action({ store, params }) {

  // From Redux Store
  let isAuthenticated = store.getState().runtime.isAuthenticated;
  const mode = params.type;

  if (!isAuthenticated) {
    return { redirect: '/login' };
  }

  return {
    title,
    component: <UserLayout><TransactionContainer mode={mode ? mode : "completed"} /></UserLayout>,
  };
}
