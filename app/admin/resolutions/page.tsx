import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminResolutionsPage() {
  const resolutions = [
    { id: 'RES-2026-011', title: 'Barangay Waste Segregation Program', category: 'Environment', date: '2026-03-18', status: 'published' },
    { id: 'RES-2026-010', title: 'Youth Scholarship Guidelines', category: 'Education', date: '2026-03-10', status: 'published' },
    { id: 'RES-2026-009', title: 'Emergency Curfew Protocol', category: 'Safety', date: '2026-03-06', status: 'draft' },
    { id: 'RES-2026-008', title: 'Community Sports Grant', category: 'Sports', date: '2026-02-28', status: 'archived' },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">Barangay Resolutions</h2>
          <p className="page-subtitle">Post and manage official barangay resolutions</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">
          + Post New Resolution
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resolutions Management</CardTitle>
          <CardDescription>Publish official resolutions and monitor their lifecycle</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resolution</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resolutions.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                      }
                    >
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
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
