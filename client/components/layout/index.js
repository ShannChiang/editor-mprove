import React from 'react';
import Nav from '../../containers/layout/nav';

export default ({content = () => null }) => (
  <div className="landing-page">
    <Nav />
    {content()}
    <div>Footer</div>
  </div>
);
