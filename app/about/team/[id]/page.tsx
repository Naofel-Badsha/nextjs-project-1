
import React from 'react';

const DynamicPage = async ({ params }) => {
  const id = (await params).id;
  return <div>DynamicPage: {id}</div>;
};

export default DynamicPage;