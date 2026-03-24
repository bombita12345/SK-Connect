'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { useState } from 'react'

export default function TransparencyPage() {
  const [activeYear, setActiveYear] = useState('2024')

  // Budget Data
  const budgetData = [
    { name: 'Infrastructure', value: 450000, percentage: 30 },
    { name: 'Health & Wellness', value: 300000, percentage: 20 },
    { name: 'Education', value: 375000, percentage: 25 },
    { name: 'Community Services', value: 225000, percentage: 15 },
    { name: 'Emergency Fund', value: 150000, percentage: 10 },
  ]

  const COLORS = ['#FCD34D', '#60A5FA', '#34D399', '#F87171', '#A78BFA']

  // Monthly Expenditure Data
  const expenditureData = [
    { month: 'Jan', amount: 85000 },
    { month: 'Feb', amount: 92000 },
    { month: 'Mar', amount: 78000 },
    { month: 'Apr', amount: 95000 },
    { month: 'May', amount: 88000 },
    { month: 'Jun', amount: 102000 },
  ]

  // Barangay Resolutions
  const resolutions = [
    {
      id: '1',
      number: 'BR 2024-001',
      title: 'Community Garden Program Implementation',
      date_approved: '2024-01-15',
      status: 'active',
      category: 'environment',
    },
    {
      id: '2',
      number: 'BR 2024-002',
      title: 'Youth Center Renovation Project',
      date_approved: '2024-02-20',
      status: 'pending',
      category: 'development',
    },
    {
      id: '3',
      number: 'BR 2024-003',
      title: 'Flood Prevention and Mitigation Program',
      date_approved: '2024-03-10',
      status: 'active',
      category: 'disaster-management',
    },
    {
      id: '4',
      number: 'BR 2024-004',
      title: 'Health and Wellness Initiative',
      date_approved: '2024-04-05',
      status: 'active',
      category: 'health',
    },
    {
      id: '5',
      number: 'BR 2024-005',
      title: 'Livelihood Training Program',
      date_approved: '2024-05-12',
      status: 'completed',
      category: 'livelihood',
    },
  ]

  // Community Feedback
  const feedback = [
    {
      id: '1',
      category: 'Infrastructure',
      message: 'Street lights in Zone C need immediate repair',
      date: '2024-06-15',
      status: 'in-progress',
    },
    {
      id: '2',
      category: 'Health',
      message: 'Request for more health clinic hours during weekends',
      date: '2024-06-14',
      status: 'reviewed',
    },
    {
      id: '3',
      category: 'Education',
      message: 'Need more scholarship programs for underprivileged students',
      date: '2024-06-13',
      status: 'reviewed',
    },
    {
      id: '4',
      category: 'Services',
      message: 'Improve waste collection frequency in residential areas',
      date: '2024-06-12',
      status: 'pending',
    },
  ]

  const getResolutionStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-blue-100 text-blue-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const getFeedbackStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'text-yellow-600',
      reviewed: 'text-blue-600',
      'in-progress': 'text-green-600',
      resolved: 'text-purple-600',
    }
    return colors[status] || 'text-gray-600'
  }

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Transparency & Governance</h2>
        <p className="page-subtitle">
          Stay informed about barangay budgets, resolutions, and community feedback
        </p>
      </div>

      {/* Year Selector */}
      <div className="flex gap-2">
        {['2022', '2023', '2024'].map((year) => (
          <Button
            key={year}
            variant={activeYear === year ? 'default' : 'outline'}
            onClick={() => setActiveYear(year)}
            className={activeYear === year ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
          >
            {year}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Budget Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Barangay Budget Allocation ({activeYear})</CardTitle>
            <CardDescription>
              Total Budget: ₱1,500,000 | Allocation by Category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pie Chart */}
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₱${value.toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Budget Details */}
              <div className="space-y-4">
                {budgetData.map((item, index) => (
                  <div key={index} className="flex items-between justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: COLORS[index] }}
                      ></div>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₱{item.value.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Expenditure */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenditure Trend</CardTitle>
            <CardDescription>Barangay spending over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenditureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₱${value.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#FCD34D" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Resolutions and Feedback */}
      <Tabs defaultValue="resolutions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="resolutions">Resolutions</TabsTrigger>
          <TabsTrigger value="feedback">Community Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="resolutions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Barangay Resolutions</CardTitle>
              <CardDescription>Official resolutions and ordinances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resolutions.map((resolution) => (
                <div key={resolution.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-gray-600">
                          {resolution.number}
                        </span>
                        <Badge className={getResolutionStatusColor(resolution.status)}>
                          {resolution.status.charAt(0).toUpperCase() + resolution.status.slice(1)}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-gray-900">{resolution.title}</h4>
                      <p className="text-xs text-gray-500 mt-2">
                        Approved: {new Date(resolution.date_approved).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Feedback & Suggestions</CardTitle>
              <CardDescription>
                Anonymous feedback from community members (shown with IDs for follow-up)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {feedback.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className={`text-xs font-semibold ${getFeedbackStatusColor(item.status)}`}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-900">{item.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Submitted: {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submit Feedback */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Feedback</CardTitle>
              <CardDescription>
                Share your concerns and suggestions anonymously
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                Submit Feedback
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
