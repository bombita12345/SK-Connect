'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Search } from 'lucide-react'

interface Opportunity {
  id: string
  title: string
  description: string
  type: 'immediate' | 'ongoing' | 'project'
  commitment_level: 'low' | 'medium' | 'high'
  volunteers_needed: number
  volunteers_signed: number
  date_available: string
  time_commitment: string
  location: string
}

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<'all' | 'immediate' | 'ongoing' | 'project'>('all')

  const mockOpportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Food Distribution Event',
      description: 'Help distribute relief goods to families in need',
      type: 'immediate',
      commitment_level: 'medium',
      volunteers_needed: 20,
      volunteers_signed: 15,
      date_available: '2024-06-18',
      time_commitment: '6 hours',
      location: 'Barangay Hall',
    },
    {
      id: '2',
      title: 'Community Cleaning Drive',
      description: 'Join us in cleaning the barangay streets and public spaces',
      type: 'ongoing',
      commitment_level: 'low',
      volunteers_needed: 30,
      volunteers_signed: 22,
      date_available: 'Every Saturday',
      time_commitment: '2-3 hours',
      location: 'Various locations',
    },
    {
      id: '3',
      title: 'Youth Mentorship Program',
      description: 'Be a mentor for young people in your community',
      type: 'ongoing',
      commitment_level: 'high',
      volunteers_needed: 10,
      volunteers_signed: 8,
      date_available: '2024-06-20',
      time_commitment: '1 hour per week',
      location: 'Youth Center',
    },
    {
      id: '4',
      title: 'Disaster Response Team',
      description: 'Train and join our disaster response team for emergency situations',
      type: 'project',
      commitment_level: 'high',
      volunteers_needed: 15,
      volunteers_signed: 9,
      date_available: '2024-07-01',
      time_commitment: '4 hours per week',
      location: 'Training Center',
    },
    {
      id: '5',
      title: 'Health and Wellness Fair Support',
      description: 'Assist in organizing and managing the health fair activities',
      type: 'immediate',
      commitment_level: 'medium',
      volunteers_needed: 25,
      volunteers_signed: 18,
      date_available: '2024-06-22',
      time_commitment: '8 hours',
      location: 'Health Center',
    },
    {
      id: '6',
      title: 'Skills Training Facilitator',
      description: 'Help conduct vocational and skills training programs',
      type: 'project',
      commitment_level: 'medium',
      volunteers_needed: 8,
      volunteers_signed: 5,
      date_available: '2024-07-15',
      time_commitment: '2 hours per session',
      location: 'Training Center',
    },
  ]

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      immediate: 'bg-red-100 text-red-700',
      ongoing: 'bg-green-100 text-green-700',
      project: 'bg-blue-100 text-blue-700',
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  const getCommitmentColor = (level: string) => {
    const colors: Record<string, string> = {
      low: 'text-green-600',
      medium: 'text-yellow-600',
      high: 'text-red-600',
    }
    return colors[level] || 'text-gray-600'
  }

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || opp.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Volunteer Opportunities</h2>
        <p className="page-subtitle">
          Find ways to contribute and make a difference in your community
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative w-full xl:w-[360px]">
          <label htmlFor="opportunities-search" className="sr-only">
            Search opportunities
          </label>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            id="opportunities-search"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 rounded-full pl-9 pr-4 text-sm placeholder:text-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'immediate', label: 'Immediate' },
            { value: 'ongoing', label: 'Ongoing' },
            { value: 'project', label: 'Project-based' },
          ].map((type) => (
            <Button
              key={type.value}
              variant={selectedType === type.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType(type.value as any)}
              className={
                selectedType === type.value
                  ? 'h-10 rounded-full bg-yellow-500 px-4 text-sm text-white shadow-sm hover:bg-yellow-600'
                  : 'h-10 rounded-full px-4 text-sm'
              }
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredOpportunities.map((opp) => (
          <Card
            key={opp.id}
            className="group flex h-full flex-col border-gray-200/80 transition-all hover:border-yellow-300 hover:shadow-md"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="min-h-[56px] text-lg leading-tight">{opp.title}</CardTitle>
                  <div className="mt-2 flex gap-2">
                    <Badge className={getTypeColor(opp.type)}>
                      {opp.type.charAt(0).toUpperCase() + opp.type.slice(1)}
                    </Badge>
                    <Badge variant="outline" className={getCommitmentColor(opp.commitment_level)}>
                      {opp.commitment_level.charAt(0).toUpperCase() + opp.commitment_level.slice(1)} Commitment
                    </Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-3 min-h-[56px] overflow-hidden">{opp.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col space-y-4">
              {/* Availability and Time */}
              <div className="grid min-h-[96px] grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Available</p>
                  <p className="font-semibold text-gray-900">{opp.date_available}</p>
                </div>
                <div>
                  <p className="text-gray-500">Time Commitment</p>
                  <p className="font-semibold text-gray-900">{opp.time_commitment}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Location</p>
                  <p className="truncate font-semibold text-gray-900">{opp.location}</p>
                </div>
              </div>

              {/* Volunteers Status */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium text-gray-700">Volunteers Needed</p>
                  <span className="text-lg font-bold text-gray-900">
                    {opp.volunteers_signed}/{opp.volunteers_needed}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{
                      width: `${(opp.volunteers_signed / opp.volunteers_needed) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Call to Action */}
              <Button className="mt-auto w-full bg-yellow-500 hover:bg-yellow-600">
                {opp.volunteers_signed < opp.volunteers_needed ? 'Sign Up Now' : 'View Details'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <Card>
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <p className="text-gray-600 mb-4">No opportunities found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedType('all')
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
