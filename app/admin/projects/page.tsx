import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminProjectsPage() {
  const projects = [
    {
      id: 'PRJ-001',
      title: 'Community Garden Expansion',
      lead: 'Maria Santos',
      volunteers: 18,
      progress: 72,
      status: 'active',
    },
    {
      id: 'PRJ-002',
      title: 'Youth Coding Bootcamp',
      lead: 'Jose Ramirez',
      volunteers: 12,
      progress: 45,
      status: 'active',
    },
    {
      id: 'PRJ-003',
      title: 'Flood Drain Cleanup Drive',
      lead: 'Ana Dela Cruz',
      volunteers: 34,
      progress: 100,
      status: 'completed',
    },
    {
      id: 'PRJ-004',
      title: 'Barangay E-Library Setup',
      lead: 'Mark Velasco',
      volunteers: 9,
      progress: 20,
      status: 'planning',
    },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">Manage Projects</h2>
          <p className="page-subtitle">Create and manage community projects</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">
          + Create New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projects Management</CardTitle>
          <CardDescription>Track status, participation, and project delivery progress</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Lead</TableHead>
                <TableHead>Volunteers</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-xs text-gray-500">{project.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{project.lead}</TableCell>
                  <TableCell>{project.volunteers}</TableCell>
                  <TableCell>
                    <div className="w-28 space-y-1">
                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-2 rounded-full bg-yellow-500" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <p className="text-xs text-gray-600">{project.progress}%</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'active'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
