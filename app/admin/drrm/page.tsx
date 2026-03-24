import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AdminDRRMPage() {
  const alerts = [
    { id: 'ALT-522', title: 'Heavy Rainfall Advisory', level: 'watch', area: 'Riverside Zone', updatedAt: '2026-03-24 09:30' },
    { id: 'ALT-521', title: 'Heat Index Warning', level: 'advisory', area: 'All Barangay Areas', updatedAt: '2026-03-23 13:15' },
    { id: 'ALT-520', title: 'Road Flooding Notice', level: 'warning', area: 'Purok 4 and 5', updatedAt: '2026-03-22 18:40' },
  ]

  const checkpoints = [
    { name: 'Early Warning Sirens', status: 'operational' },
    { name: 'Evacuation Center Supplies', status: 'restocking' },
    { name: 'Rescue Team Availability', status: 'ready' },
    { name: 'Medical Response Units', status: 'ready' },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">DRRM Management</h2>
          <p className="page-subtitle">Manage disaster alerts and emergency information</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">
          + Issue New Alert
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Disaster Alerts</CardTitle>
          <CardDescription>Create and manage disaster risk reduction and management alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="rounded-lg border border-gray-200 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-900">{alert.title}</p>
                  <p className="text-sm text-gray-600">{alert.area}</p>
                  <p className="text-xs text-gray-500 mt-1">Updated: {alert.updatedAt}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      alert.level === 'warning'
                        ? 'bg-red-100 text-red-700'
                        : alert.level === 'watch'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                    }
                  >
                    {alert.level.charAt(0).toUpperCase() + alert.level.slice(1)}
                  </Badge>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preparedness Checkpoints</CardTitle>
          <CardDescription>Operational readiness across critical response resources</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {checkpoints.map((item) => (
            <div key={item.name} className="rounded-lg border border-gray-200 p-4 flex items-center justify-between">
              <p className="font-medium text-gray-900">{item.name}</p>
              <Badge
                className={
                  item.status === 'ready' || item.status === 'operational'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
