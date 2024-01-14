import React from 'react';
import Layout from '../../../components/Layout';
import Page from '../../../components/Page';
import fetch from '../../../core/fetch';

const query = `query getEditStaticPage ($id: Int!) {
  getEditStaticPage (id: $id) {
      id
      pageName
      content
      metaTitle
      metaDescription
      createdAt
  }
}`;


export default async function action({ locale }) {
  const dataResult = await new Promise((resolve) => {
    require.ensure([], (require) => {
      resolve(require('./cookiePolicy.md'));
    }, 'cookiePolicy');
  });

  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { id: 6 },
    }),
    credentials: 'include',
  });
  const { data } = await resp.json();

  if (data && data.getEditStaticPage) {

    return {
      title: data.getEditStaticPage.metaTitle,
      description: data.getEditStaticPage.metaDescription,
      component: <Layout><Page html={data.getEditStaticPage.content} title={data.getEditStaticPage.metaTitle} /></Layout>,
    };

  } else {

    return {
      title: dataResult.title,
      component: <Layout><Page {...dataResult} /></Layout>,
    };

  }

}
