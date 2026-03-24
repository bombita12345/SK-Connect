'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState, useEffect } from 'react'

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Demo',
    lastName: 'Resident',
    barangay: 'Bagong Silang',
    email: 'resident@example.com',
  })

  useEffect(() => {
    const loadProfile = async () => {
      // Keep a short loading state so the page behavior stays the same in static mode.
      await new Promise((resolve) => setTimeout(resolve, 250))
      setIsLoading(false)
    }

    loadProfile()
  }, [])

  const handleSave = async () => {
    setIsSaving(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      alert('Profile saved locally (static mode).')
    } catch (error) {
      alert('Error saving profile')
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return <div className="page-shell">Loading...</div>
  }

  return (
    <div className="page-shell max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>
            Manage your SK-CONNECT profile information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center text-2xl font-bold text-yellow-700">
                {formData.firstName.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-sm text-gray-600">{formData.email}</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="barangay">Barangay</Label>
              <Input
                id="barangay"
                value={formData.barangay}
                disabled
                className="bg-gray-50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                disabled
                className="bg-gray-50"
              />
              <p className="text-xs text-gray-500">
                Email cannot be changed. Contact support if you need to update it.
              </p>
            </div>

            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
