'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  status: 'planning' | 'ongoing' | 'completed'
  progress: number
  volunteers_needed: number
  volunteers_assigned: number
  start_date: string
  end_date: string
  location: string
}

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'planning' | 'ongoing' | 'completed'>('all')

  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Community Garden Development',
      description: 'Create a sustainable community garden to grow vegetables for local residents',
      status: 'ongoing',
      progress: 65,
      volunteers_needed: 10,
      volunteers_assigned: 7,
      start_date: '2024-05-01',
      end_date: '2024-08-31',
      location: 'Barangay Field',
    },
    {
      id: '2',
      title: 'Youth Center Renovation',
      description: 'Renovate and modernize the youth center facilities',
      status: 'planning',
      progress: 20,
      volunteers_needed: 15,
      volunteers_assigned: 4,
      start_date: '2024-07-01',
      end_date: '2024-12-31',
      location: 'Youth Center',
    },
    {
      id: '3',
      title: 'Road Safety Campaign',
      description: 'Awareness campaign on road safety and traffic regulations',
      status: 'ongoing',
      progress: 45,
      volunteers_needed: 8,
      volunteers_assigned: 6,
      start_date: '2024-06-01',
      end_date: '2024-07-31',
      location: 'Community-wide',
    },
    {
      id: '4',
      title: 'Flood Prevention System Installation',
      description: 'Install drainage systems to prevent flooding in low-lying areas',
      status: 'planning',
      progress: 10,
      volunteers_needed: 20,
      volunteers_assigned: 3,
      start_date: '2024-08-01',
      end_date: '2024-12-31',
      location: 'Low-lying areas',
    },
    {
      id: '5',
      title: 'Barangay Health Program',
      description: 'Conduct regular health check-ups and wellness programs',
      status: 'completed',
      progress: 100,
      volunteers_needed: 12,
      volunteers_assigned: 12,
      start_date: '2024-01-01',
      end_date: '2024-05-31',
      location: 'Health Center',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      planning: 'bg-blue-100 text-blue-700',
      ongoing: 'bg-green-100 text-green-700',
      completed: 'bg-gray-100 text-gray-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const filteredProjects = selectedStatus === 'all'
    ? mockProjects
    : mockProjects.filter((p) => p.status === selectedStatus)

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Community Projects</h2>
        <p className="page-subtitle">
          Participate in projects that improve your barangay
        </p>
      </div>

      {/* Status Filter */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Button
          variant={selectedStatus === 'all' ? 'default' : 'outline'}
          onClick={() => setSelectedStatus('all')}
          className={
            selectedStatus === 'all'
              ? 'h-10 rounded-full bg-yellow-500 px-4 text-sm text-white shadow-sm hover:bg-yellow-600'
              : 'h-10 rounded-full px-4 text-sm'
          }
        >
          All Projects
        </Button>
        <Button
          variant={selectedStatus === 'planning' ? 'default' : 'outline'}
          onClick={() => setSelectedStatus('planning')}
          className={
            selectedStatus === 'planning'
              ? 'h-10 rounded-full bg-blue-500 px-4 text-sm text-white shadow-sm hover:bg-blue-600'
              : 'h-10 rounded-full px-4 text-sm'
          }
        >
          Planning
        </Button>
        <Button
          variant={selectedStatus === 'ongoing' ? 'default' : 'outline'}
          onClick={() => setSelectedStatus('ongoing')}
          className={
            selectedStatus === 'ongoing'
              ? 'h-10 rounded-full bg-green-500 px-4 text-sm text-white shadow-sm hover:bg-green-600'
              : 'h-10 rounded-full px-4 text-sm'
          }
        >
          Ongoing
        </Button>
        <Button
          variant={selectedStatus === 'completed' ? 'default' : 'outline'}
          onClick={() => setSelectedStatus('completed')}
          className={
            selectedStatus === 'completed'
              ? 'h-10 rounded-full bg-gray-500 px-4 text-sm text-white shadow-sm hover:bg-gray-600'
              : 'h-10 rounded-full px-4 text-sm'
          }
        >
          Completed
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group flex h-full flex-col border-gray-200/80 transition-all hover:border-yellow-300 hover:shadow-md"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="min-h-[56px] text-xl leading-tight">{project.title}</CardTitle>
                  <Badge className={`mt-2 ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </div>
              </div>
              <CardDescription className="mt-3 min-h-[56px] overflow-hidden">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col space-y-5">
              {/* Timeline */}
              <div className="grid min-h-[96px] grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(project.start_date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(project.end_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Location</p>
                  <p className="truncate font-semibold text-gray-900">{project.location}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Project Progress</span>
                  <span className="font-semibold text-gray-900">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Volunteers */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-gray-600">Volunteers Needed</p>
                  <p className="text-xl font-bold text-gray-900">{project.volunteers_needed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Assigned</p>
                  <p className="text-xl font-bold text-yellow-600">{project.volunteers_assigned}</p>
                </div>
              </div>

              {/* Action */}
              <Button className="mt-auto w-full bg-yellow-500 hover:bg-yellow-600">
                {project.volunteers_assigned < project.volunteers_needed ? 'Join Project' : 'View Details'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
