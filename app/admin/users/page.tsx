import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminUsersPage() {
  const users = [
    { id: 'USR-114', name: 'Maria Santos', email: 'maria.santos@example.com', role: 'resident', status: 'active' },
    { id: 'USR-115', name: 'John Cruz', email: 'john.cruz@example.com', role: 'volunteer', status: 'active' },
    { id: 'USR-116', name: 'Lea Fernandez', email: 'lea.fernandez@example.com', role: 'official', status: 'active' },
    { id: 'USR-117', name: 'Paolo Reyes', email: 'paolo.reyes@example.com', role: 'resident', status: 'pending' },
    { id: 'USR-118', name: 'Nina Garcia', email: 'nina.garcia@example.com', role: 'resident', status: 'suspended' },
  ]

  return (
    <div className="page-shell">
      <div className="page-header">
        <h2 className="page-title">User Management</h2>
        <p className="page-subtitle">Manage community members, roles, and permissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Registered Users</CardDescription>
            <CardTitle className="text-2xl">1,245</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Approval</CardDescription>
            <CardTitle className="text-2xl text-yellow-600">14</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Suspended Accounts</CardDescription>
            <CardTitle className="text-2xl text-red-600">3</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Community Members</CardTitle>
          <CardDescription>View and manage all registered users in your barangay</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className="bg-slate-100 text-slate-700">
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : user.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                      }
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Message</Button>
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
