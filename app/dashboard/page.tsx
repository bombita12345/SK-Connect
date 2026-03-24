import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { BellRing, Briefcase, CalendarDays, Clock3, Eye } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="page-shell">
      {/* Welcome Section */}
      <div className="page-header">
        <h2 className="page-title">Welcome to SK-CONNECT</h2>
        <p className="page-subtitle">
          Empowering youth, connecting communities. Stay updated with the latest events, projects, and opportunities in your barangay.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">8</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">5</div>
            <p className="text-xs text-gray-500 mt-1">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Volunteers Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">12</div>
            <p className="text-xs text-gray-500 mt-1">Open positions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              Community Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">1,245</div>
            <p className="text-xs text-gray-500 mt-1">Active members</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcements */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Latest Announcements</span>
                <Link href="/dashboard/transparency">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
              <CardDescription>
                Stay informed about important barangay updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-l-4 border-yellow-500 pl-4 py-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Barangay Fiesta 2024 Announcement
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Join us for the grand celebration on June 15, 2024. Register your volunteer slots now!
                      </p>
                      <p className="text-xs text-gray-500 mt-2">3 days ago</p>
                    </div>
                    <Badge>Important</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events This Week */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events This Week</CardTitle>
              <CardDescription>Don't miss out on community activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Youth Leadership Workshop
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Learn leadership skills from experienced mentors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>June 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock3 className="h-4 w-4" />
                        <span>2:00 PM</span>
                      </div>
                    </div>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
