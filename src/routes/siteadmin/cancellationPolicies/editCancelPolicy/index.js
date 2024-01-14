import React from 'react';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import EditCancelPolicy from './EditCancelPolicy';

const title = 'Edit Cancel Policy';

export default async function action({ store, params }) {

    // From Redux Store
    let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;

    if (!isAdminAuthenticated) {
        return { redirect: '/siteadmin/login' };
    }

    const id = Number(params.id);

    return {
        title,
        component: <AdminLayout><EditCancelPolicy title={title} id={id} /></AdminLayout>,
    };
}
