"use client"
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './elements/app-header';

const { Content } = Layout;

function AppLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <Layout className='h-full'>
        <AppHeader />
        <Content>{children}</Content>
      </Layout>
    </div>
  )
}

export default AppLayout
