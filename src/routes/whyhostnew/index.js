import React from 'react';
import Layout from '../../components/Layout';
import WhyHostNew from './WhyHostNew';

const title = 'whyhost';


export default function action() {

  let whyHostHeader = 'whyHostHeader';

  return {
    title,
    component: <Layout whyHostHeader={whyHostHeader} whyHostSearchHide><WhyHostNew title={title} /></Layout>,
  };
}
