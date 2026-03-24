import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminReportsPage() {
  const reports = [
    { id: 'RPT-040', name: 'Monthly Engagement Summary', period: 'March 2026', status: 'ready' },
    { id: 'RPT-039', name: 'Budget Utilization Report', period: 'Q1 2026', status: 'ready' },
    { id: 'RPT-038', name: 'DRRM Incident Review', period: 'February 2026', status: 'processing' },
    { id: 'RPT-037', name: 'Project Completion Audit', period: 'Q1 2026', status: 'ready' },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">Reports & Analytics</h2>
          <p className="page-subtitle">Generate and review operational and transparency reports</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">Generate New Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Events This Month</CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Volunteer Hours</CardDescription>
            <CardTitle className="text-2xl">486</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Avg Attendance</CardDescription>
            <CardTitle className="text-2xl">78%</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Citizen Feedback Score</CardDescription>
            <CardTitle className="text-2xl">4.4 / 5</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Reports</CardTitle>
          <CardDescription>Download ready reports or monitor generation status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-xs text-gray-500">{report.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{report.period}</TableCell>
                  <TableCell>
                    <Badge className={report.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                      {report.status === 'ready' ? 'Ready' : 'Processing'}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                      Download
                    </Button>
                    <Button variant="outline" size="sm">Preview</Button>
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
