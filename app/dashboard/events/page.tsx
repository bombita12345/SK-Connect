'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { CalendarDays, Clock3, MapPin, Search } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  capacity: number
  registered_count: number
  is_registered?: boolean
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    // Mock data for events
    const mockEvents: Event[] = [
      {
        id: '1',
        title: 'Youth Leadership Workshop',
        description: 'Learn leadership skills from experienced mentors in your community',
        date: '2024-06-15',
        time: '2:00 PM',
        location: 'Barangay Hall',
        category: 'workshop',
        capacity: 50,
        registered_count: 32,
      },
      {
        id: '2',
        title: 'Sports Tournament',
        description: 'Join the community sports event featuring basketball and volleyball',
        date: '2024-06-20',
        time: '9:00 AM',
        location: 'Sports Complex',
        category: 'sports',
        capacity: 100,
        registered_count: 78,
      },
      {
        id: '3',
        title: 'Barangay Fiesta 2024',
        description: 'Join us for the grand celebration with food, games, and entertainment',
        date: '2024-06-25',
        time: '10:00 AM',
        location: 'Town Square',
        category: 'celebration',
        capacity: 500,
        registered_count: 234,
      },
      {
        id: '4',
        title: 'Environmental Clean-up Drive',
        description: 'Help us keep our barangay clean and green',
        date: '2024-06-18',
        time: '7:00 AM',
        location: 'Various locations',
        category: 'environment',
        capacity: 200,
        registered_count: 145,
      },
      {
        id: '5',
        title: 'Health and Wellness Fair',
        description: 'Free health check-ups and wellness consultations',
        date: '2024-06-22',
        time: '8:00 AM',
        location: 'Health Center',
        category: 'health',
        capacity: 300,
        registered_count: 187,
      },
      {
        id: '6',
        title: 'Community Feedback Forum',
        description: 'Share your concerns and suggestions with barangay officials',
        date: '2024-06-28',
        time: '6:00 PM',
        location: 'Barangay Hall',
        category: 'governance',
        capacity: 150,
        registered_count: 56,
      },
    ]

    setEvents(mockEvents)
    setIsLoading(false)
  }, [])

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'sports', label: 'Sports' },
    { value: 'celebration', label: 'Celebrations' },
    { value: 'environment', label: 'Environment' },
    { value: 'health', label: 'Health' },
    { value: 'governance', label: 'Governance' },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      workshop: 'bg-blue-100 text-blue-700',
      sports: 'bg-green-100 text-green-700',
      celebration: 'bg-yellow-100 text-yellow-700',
      environment: 'bg-teal-100 text-teal-700',
      health: 'bg-red-100 text-red-700',
      governance: 'bg-purple-100 text-purple-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  if (isLoading) {
    return <div className="page-shell">Loading events...</div>
  }

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Community Events</h2>
        <p className="page-subtitle">
          Discover and register for upcoming events in your barangay
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative w-full xl:w-[360px]">
          <label htmlFor="events-search" className="sr-only">
            Search events
          </label>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            id="events-search"
            placeholder="Search by event name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 rounded-full pl-9 pr-4 text-sm placeholder:text-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.value)}
              className={
                selectedCategory === cat.value
                  ? 'h-10 rounded-full bg-yellow-500 px-4 text-sm text-white shadow-sm hover:bg-yellow-600'
                  : 'h-10 rounded-full px-4 text-sm'
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className="group flex h-full flex-col border-gray-200/80 transition-all hover:border-yellow-300 hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge className={`mt-2 ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col space-y-4">
              <p className="text-gray-600">{event.description}</p>

              <div className="space-y-2 rounded-lg bg-gray-50 p-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarDays className="h-4 w-4 text-gray-500" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock3 className="h-4 w-4 text-gray-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Capacity */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Registrations</span>
                  <span className="font-semibold text-gray-900">
                    {event.registered_count}/{event.capacity}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{
                      width: `${(event.registered_count / event.capacity) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <Button className="mt-auto w-full bg-yellow-500 hover:bg-yellow-600">
                Register Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <Card>
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <p className="text-gray-600 mb-4">No events found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
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
