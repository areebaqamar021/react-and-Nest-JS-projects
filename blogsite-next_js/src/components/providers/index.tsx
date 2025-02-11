"use client"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryProvider } from '@src/lib'
import { ConfigProvider } from 'antd'
import React, { ReactNode } from 'react'

function Providers({ children }: { children: ReactNode }) {
    return (
        <AntdRegistry>
            <ConfigProvider>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default Providers
