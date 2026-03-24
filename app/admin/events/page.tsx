import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminEventsPage() {
  const events = [
    {
      id: '1',
      title: 'Youth Leadership Workshop',
      date: '2024-06-15',
      registrations: 32,
      capacity: 50,
      status: 'active',
    },
    {
      id: '2',
      title: 'Sports Tournament',
      date: '2024-06-20',
      registrations: 78,
      capacity: 100,
      status: 'active',
    },
    {
      id: '3',
      title: 'Barangay Fiesta 2024',
      date: '2024-06-25',
      registrations: 234,
      capacity: 500,
      status: 'pending_approval',
    },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">Manage Events</h2>
          <p className="page-subtitle">Create, edit, and manage community events</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">
          + Create New Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Events List</CardTitle>
          <CardDescription>All community events and their registration status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Registrations</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                  <TableCell>{event.registrations}/{event.capacity}</TableCell>
                  <TableCell>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{
                          width: `${(event.registrations / event.capacity) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        event.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {event.status === 'active' ? 'Active' : 'Pending Approval'}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
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
