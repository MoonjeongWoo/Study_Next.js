import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <p>English snowflakes</p>
      <div>{children}</div>
    </div>
  );
}
