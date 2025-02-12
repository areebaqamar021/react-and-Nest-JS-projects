import { Button, Layout, Space } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout
const items: MenuItem[] = [
  {
    label: <Link href='/'>Home</Link>,
    key: 'home',
  },
  {
    label: <Link href='/posts'>Posts</Link>,
    key: 'posts',
  },
  {
    label: <Link href='/'>Issues</Link>,
    key: 'issues',
  },
  {
    label: <Link href='/'>Announcements</Link>,
    key: 'announcements',
  },
  {
    label: <Link href='/about'>About</Link>,
    key: 'about',
  },
  {
    label: <Link href='/contact'>Contact</Link>,
    key: 'contacts',
  },
];
function AppHeader() {
  return (
    <Header className='bg-white flex items-center h-20'>
      <Image src={"/images/logo.png"} alt='' width={100} height={100} />
      <Menu className='border-b-0 flex-1 flex justify-center items-center text-base font-semibold' mode="horizontal" items={items} />
      <Space size="large">
        <Button
          shape="circle"
          type="text"
          className="text-xl"
        >
          <Image
            src="/images/search.png"
            alt="search"
            width={20}
            height={10}
          />
        </Button>
        <Button
          shape="circle"
          type="text"
          className="text-xl font-semibold"
        >
          Login
        </Button>
      </Space>
    </Header>
  )
}

export default AppHeader
