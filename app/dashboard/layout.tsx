'use client'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useState } from 'react'

const demoUser = {
  email: 'resident@example.com',
  user_metadata: {
    first_name: 'Demo',
    last_name: 'Resident',
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  return (
    <>
      <Header
        user={demoUser}
      />
      <div className="flex">
        <div
          onMouseEnter={() => setIsSidebarCollapsed(false)}
          onMouseLeave={() => setIsSidebarCollapsed(true)}
        >
          <Sidebar collapsed={isSidebarCollapsed} />
        </div>
        <main className="flex-1 min-w-0 overflow-auto">
          {children}
        </main>
      </div>
    </>
  )
}
