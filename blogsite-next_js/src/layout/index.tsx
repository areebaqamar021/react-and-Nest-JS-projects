"use client"
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './elements/app-header';
import AppFooter from './elements/app-footer';

const { Content } = Layout;

function AppLayout({ children, onLogout }: { children: ReactNode, onLogout: () => Promise<void> }) {
  return (
    <div>
      <Layout className='h-full'>
        <AppHeader onLogout={onLogout}/>
        <Content>{children}</Content>
        <AppFooter/>
      </Layout>
    </div>
  )
}

export default AppLayout
