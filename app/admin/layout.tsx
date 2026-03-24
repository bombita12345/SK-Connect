'use client'

import { Header } from '@/components/header'
import { AdminSidebar } from '@/components/admin-sidebar'
import { useState } from 'react'

const demoAdminUser = {
  email: 'official@example.com',
  user_metadata: {
    first_name: 'Demo',
    last_name: 'Official',
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  return (
    <>
      <Header
        user={demoAdminUser}
        title="Admin Portal"
      />
      <div className="flex">
        <div
          onMouseEnter={() => setIsSidebarCollapsed(false)}
          onMouseLeave={() => setIsSidebarCollapsed(true)}
        >
          <AdminSidebar collapsed={isSidebarCollapsed} />
        </div>
        <main className="flex-1 min-w-0 overflow-auto">
          {children}
        </main>
      </div>
    </>
  )
}
