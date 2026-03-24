'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  CalendarDays,
  FileText,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ADMIN_NAVIGATION_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Manage Events', href: '/admin/events', icon: CalendarDays },
  { label: 'Manage Projects', href: '/admin/projects', icon: Briefcase },
  { label: 'User Management', href: '/admin/users', icon: Users },
  { label: 'Budget Management', href: '/admin/budget', icon: Wallet },
  { label: 'Resolutions', href: '/admin/resolutions', icon: FileText },
  { label: 'DRRM Management', href: '/admin/drrm', icon: ShieldAlert },
  { label: 'Reports', href: '/admin/reports', icon: BarChart3 },
]

interface AdminSidebarProps {
  collapsed?: boolean
}

export function AdminSidebar({ collapsed = false }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={`border-r border-gray-200 bg-white h-screen overflow-y-auto transition-all duration-200 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-4">
        <nav className="space-y-2">
          {ADMIN_NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon as LucideIcon
            const isAdminRoot = item.href === '/admin'
            const isActive = isAdminRoot
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full gap-3 ${
                    collapsed ? 'justify-center px-2' : 'justify-start'
                  } ${
                    isActive
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-8 p-4 border-t border-gray-200 space-y-2">
        <Link href="/dashboard">
          <Button
            variant="outline"
            className={`w-full gap-3 ${collapsed ? 'justify-center px-2' : 'justify-start'}`}
            title={collapsed ? 'Back to User Portal' : undefined}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Back to User Portal</span>}
          </Button>
        </Link>
      </div>
    </aside>
  )
}
