import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import CancellationPolicies from './CancellationPolicies';
import { restrictUrls } from '../../../helpers/adminPrivileges';

const title = 'Cancellation Policies Management';

export default async function action({ store }) {

    // // From Redux Store
    // let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;

    // let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;


    // if (!isAdminAuthenticated) {
    //     return { redirect: '/siteadmin/login' };
    // }

    // // Admin restriction
    // if (!restrictUrls('/siteadmin/staticpage/management', adminPrivileges)) {
    //     return { redirect: '/siteadmin' };
    // }

    return {
        title,
        component: <AdminLayout><CancellationPolicies title={title} /></AdminLayout>,
    };
}
