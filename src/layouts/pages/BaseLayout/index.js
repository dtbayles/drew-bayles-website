import React from 'react';

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;