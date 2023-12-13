import React, { PropsWithChildren } from 'react';

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="default-layout">{children}</div>;
};

export default DefaultLayout;
