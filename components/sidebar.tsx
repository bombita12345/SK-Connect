'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BellRing,
  Briefcase,
  Eye,
  LayoutDashboard,
  Settings,
  ShieldAlert,
  User,
  CalendarDays,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const NAVIGATION_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Events', href: '/dashboard/events', icon: CalendarDays },
  { label: 'Projects', href: '/dashboard/projects', icon: Briefcase },
  { label: 'Opportunities', href: '/dashboard/opportunities', icon: BellRing },
  { label: 'Transparency', href: '/dashboard/transparency', icon: Eye },
  { label: 'DRRM Alerts', href: '/dashboard/drrm', icon: ShieldAlert },
]

interface SidebarProps {
  collapsed?: boolean
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={`border-r border-gray-200 bg-white h-screen overflow-y-auto transition-all duration-200 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <nav className="p-4 space-y-2">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon as LucideIcon
          const isDashboardRoot = item.href === '/dashboard'
          const isActive = isDashboardRoot
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
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
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

      <div className="mt-8 p-4 border-t border-gray-200 space-y-2">
        <Link href="/dashboard/profile">
          <Button
            variant="ghost"
            className={`w-full gap-3 text-gray-700 hover:bg-gray-100 ${
              collapsed ? 'justify-center px-2' : 'justify-start'
            }`}
            title={collapsed ? 'My Profile' : undefined}
          >
            <User className="h-4 w-4 shrink-0" />
            {!collapsed && <span>My Profile</span>}
          </Button>
        </Link>
        <Link href="/admin">
          <Button
            variant="ghost"
            className={`w-full gap-3 text-gray-700 hover:bg-gray-100 ${
              collapsed ? 'justify-center px-2' : 'justify-start'
            }`}
            title={collapsed ? 'Admin Panel' : undefined}
          >
            <Settings className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Admin Panel</span>}
          </Button>
        </Link>
      </div>
    </aside>
  )
}
