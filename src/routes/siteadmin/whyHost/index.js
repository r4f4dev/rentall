import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import WhyHost from './WhyHost';
import { restrictUrls } from '../../../helpers/adminPrivileges';

const title = 'Why Host';

export default async function action({ store, dispatch }) {

  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return { redirect: '/siteadmin/login' };
  }

  // // Admin restriction
  if (!restrictUrls('/siteadmin/why-host', adminPrivileges)) {
    return { redirect: '/siteadmin' };
  }

  return {
    title,
    component: <AdminLayout><WhyHost title={title} /></AdminLayout>,
  };
}
