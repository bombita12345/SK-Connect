'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  title?: string
  user?: {
    email?: string
    user_metadata?: {
      first_name?: string
      last_name?: string
    }
  } | null
}

export function Header({
  title,
  user,
}: HeaderProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    router.push('/auth/login')
    setIsLoading(false)
  }

  const userName = user?.user_metadata
    ? `${user.user_metadata.first_name || ''} ${user.user_metadata.last_name || ''}`
    : user?.email

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
            <Image 
              src="/assets/logo.svg" 
              alt="SK-CONNECT" 
              width={56} 
              height={56}
              className="h-14 w-14"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SK-CONNECT</h1>
              {title && <p className="text-sm text-gray-600">{title}</p>}
            </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-yellow-700">
                    {userName?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="text-sm">{userName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push('/dashboard/profile')}
              >
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push('/dashboard')}
              >
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} disabled={isLoading}>
                {isLoading ? 'Signing out...' : 'Sign Out'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
