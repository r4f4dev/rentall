import React from 'react';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import AddReviewsWhyHost from './AddReviewsWhyHost';
import { restrictUrls } from '../../../../helpers/adminPrivileges'

const title = 'Add a new review';

export default async function action({ store, params }) {

    let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
    let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

    if (!isAdminAuthenticated) {
        return { redirect: '/siteadmin/login' };
    }

    if (!restrictUrls('/siteadmin/whyHost/review', adminPrivileges)) {
        return { redirect: '/siteadmin' };
    }

    return {
        title,
        component: <AdminLayout><AddReviewsWhyHost title={title} /></AdminLayout>,
    };
}
