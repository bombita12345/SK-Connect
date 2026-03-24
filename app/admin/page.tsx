'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import Link from 'next/link'
import {
  CalendarDays,
  Briefcase,
  FileText,
  ShieldAlert,
  UserRound,
  MessageSquare,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'

export default function AdminDashboardPage() {
  // Mock statistics
  const stats = [
    { label: 'Total Users', value: '1,245', change: '+12%', color: 'text-blue-600' },
    { label: 'Active Events', value: '8', change: '+2', color: 'text-green-600' },
    { label: 'Projects', value: '5', change: '1 new', color: 'text-yellow-600' },
    { label: 'Pending Feedback', value: '24', change: '-5', color: 'text-red-600' },
  ]

  const userGrowthData = [
    { month: 'Jan', users: 450 },
    { month: 'Feb', users: 520 },
    { month: 'Mar', users: 680 },
    { month: 'Apr', users: 890 },
    { month: 'May', users: 1050 },
    { month: 'Jun', users: 1245 },
  ]

  const eventEngagementData = [
    { event: 'Leadership Workshop', registrations: 32 },
    { event: 'Sports Tournament', registrations: 78 },
    { event: 'Barangay Fiesta', registrations: 234 },
    { event: 'Clean-up Drive', registrations: 145 },
    { event: 'Health Fair', registrations: 187 },
  ]

  const recentActivity = [
    {
      id: '1',
      type: 'user_signup',
      message: 'New user registered: Maria Santos',
      timestamp: '2 hours ago',
      icon: UserRound,
    },
    {
      id: '2',
      type: 'event_registration',
      message: '15 new registrations for Sports Tournament',
      timestamp: '5 hours ago',
      icon: CalendarDays,
    },
    {
      id: '3',
      type: 'feedback_submitted',
      message: 'New feedback: Infrastructure concerns in Zone B',
      timestamp: '1 day ago',
      icon: MessageSquare,
    },
    {
      id: '4',
      type: 'project_update',
      message: 'Community Garden project progress: 65%',
      timestamp: '2 days ago',
      icon: BarChart3,
    },
  ]

  const pendingApprovals = [
    { id: '1', type: 'Event', title: 'Youth Seminar', status: 'pending', days: 2 },
    { id: '2', type: 'Project', title: 'Tech Hub Setup', status: 'pending', days: 5 },
    { id: '3', type: 'Feedback', title: 'Infrastructure complaint', status: 'needs_review', days: 1 },
  ]

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Admin Dashboard</h2>
        <p className="page-subtitle">
          Monitor barangay activities, manage content, and oversee community engagement
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <p className="text-xs text-gray-500 mt-2">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth Trend</CardTitle>
            <CardDescription>New users registered over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#FCD34D"
                  strokeWidth={2}
                  dot={{ fill: '#FCD34D', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Event Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Event Registrations</CardTitle>
            <CardDescription>Latest event participation rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={eventEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="event" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="registrations" fill="#FCD34D" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/events">
              <Button variant="outline" className="w-full justify-start gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>Create Event</span>
              </Button>
            </Link>
            <Link href="/admin/projects">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Briefcase className="h-4 w-4" />
                <span>New Project</span>
              </Button>
            </Link>
            <Link href="/admin/resolutions">
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                <span>Post Resolution</span>
              </Button>
            </Link>
            <Link href="/admin/drrm">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ShieldAlert className="h-4 w-4" />
                <span>Issue Alert</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon as LucideIcon
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <Icon className="mt-0.5 h-5 w-5 text-slate-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Pending Approvals</span>
            <Badge>3 items</Badge>
          </CardTitle>
          <CardDescription>Items awaiting administrative review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApprovals.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline">{item.type}</Badge>
                    <span className="text-sm font-medium text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Pending for {item.days} day{item.days > 1 ? 's' : ''}
                  </p>
                </div>
                <Badge className={
                  item.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }>
                  {item.status === 'pending' ? 'Review' : 'Urgent'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Help & Documentation */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Help & Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="#" className="p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-900">Admin Guide</p>
              <p className="text-sm text-gray-600 mt-1">Learn how to manage events, projects, and content</p>
            </Link>
            <Link href="#" className="p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-900">FAQ</p>
              <p className="text-sm text-gray-600 mt-1">Find answers to common administrative questions</p>
            </Link>
            <Link href="#" className="p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-900">Support</p>
              <p className="text-sm text-gray-600 mt-1">Contact technical support for assistance</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
