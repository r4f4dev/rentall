import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import SiteConfiguration from './SiteConfiguration';
import { restrictUrls } from '../../../helpers/adminPrivileges';

const title = 'Site Configuration Settings';

export default async function action({ store }) {

  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return { redirect: '/siteadmin/login' };
  }

  // Admin restriction
  if (!restrictUrls('/siteadmin/settings/siteConfiguration', adminPrivileges)) {
    return { redirect: '/siteadmin' };
  }

  return {
    title,
    component: <AdminLayout><SiteConfiguration title={title} /></AdminLayout>,
  };
}
