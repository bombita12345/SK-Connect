'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

interface Alert {
  id: string
  title: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  type: 'flood' | 'earthquake' | 'typhoon' | 'fire' | 'landslide' | 'other'
  date_issued: string
  time_issued: string
  recommendations: string[]
  affected_areas: string[]
  status: 'active' | 'resolved'
}

interface Resource {
  id: string
  name: string
  type: string
  location: string
  availability: string
}

export default function DRRMPage() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null)

  const alerts: Alert[] = [
    {
      id: '1',
      title: 'Heavy Rainfall Alert',
      description: 'Moderate to heavy rainfall expected in the coming 24-48 hours',
      severity: 'medium',
      type: 'flood',
      date_issued: '2024-06-15',
      time_issued: '10:30 AM',
      recommendations: [
        'Avoid low-lying areas and flood-prone zones',
        'Keep emergency supplies ready',
        'Monitor local news and weather updates',
        'Have evacuation plans ready',
      ],
      affected_areas: ['Zone A', 'Zone B', 'Zone C'],
      status: 'active',
    },
    {
      id: '2',
      title: 'Strong Wind Advisory',
      description: 'Strong winds with speeds up to 40 km/h expected',
      severity: 'low',
      type: 'typhoon',
      date_issued: '2024-06-15',
      time_issued: '2:00 PM',
      recommendations: [
        'Secure loose objects and outdoor structures',
        'Stay indoors if possible',
        'Avoid traveling unless necessary',
      ],
      affected_areas: ['All zones'],
      status: 'active',
    },
    {
      id: '3',
      title: 'Flood Cleared',
      description: 'Previous flood warning has been lifted',
      severity: 'low',
      type: 'flood',
      date_issued: '2024-06-14',
      time_issued: '11:00 AM',
      recommendations: [
        'Return to normal activities',
        'Check for any damages',
        'Report any issues to barangay officials',
      ],
      affected_areas: ['Zone D'],
      status: 'resolved',
    },
  ]

  const resources: Resource[] = [
    {
      id: '1',
      name: 'Emergency Response Team',
      type: 'Personnel',
      location: 'Barangay Hall',
      availability: '24/7',
    },
    {
      id: '2',
      name: 'First Aid Kits & Medical Supplies',
      type: 'Medical',
      location: 'Health Center',
      availability: 'Available',
    },
    {
      id: '3',
      name: 'Evacuation Centers',
      type: 'Shelter',
      location: 'School Gymnasium, Community Center',
      availability: 'On-demand',
    },
    {
      id: '4',
      name: 'Relief Goods Storage',
      type: 'Supplies',
      location: 'Barangay Warehouse',
      availability: 'Ready for distribution',
    },
    {
      id: '5',
      name: 'Communication Equipment',
      type: 'Equipment',
      location: 'Barangay Office',
      availability: 'Available 24/7',
    },
  ]

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      low: 'bg-blue-100 text-blue-700',
      medium: 'bg-yellow-100 text-yellow-700',
      high: 'bg-orange-100 text-orange-700',
      critical: 'bg-red-100 text-red-700',
    }
    return colors[severity] || 'bg-gray-100 text-gray-700'
  }

  const getSeverityBorder = (severity: string) => {
    const borders: Record<string, string> = {
      low: 'border-l-4 border-blue-500',
      medium: 'border-l-4 border-yellow-500',
      high: 'border-l-4 border-orange-500',
      critical: 'border-l-4 border-red-500',
    }
    return borders[severity] || 'border-l-4 border-gray-500'
  }

  return (
    <div className="page-shell">
      {/* Header */}
      <div className="page-header">
        <h2 className="page-title">Disaster Risk Reduction & Management</h2>
        <p className="page-subtitle">
          Stay informed about weather alerts, safety recommendations, and emergency resources
        </p>
      </div>

      {/* Active Alerts */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Active Alerts</h3>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {alerts
            .filter((a) => a.status === 'active')
            .map((alert) => (
              <Card key={alert.id} className={`${getSeverityBorder(alert.severity)}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{alert.title}</CardTitle>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <CardDescription>{alert.description}</CardDescription>
                      <p className="text-xs text-gray-500 mt-2">
                        Issued: {alert.date_issued} at {alert.time_issued}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Affected Areas */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Affected Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {alert.affected_areas.map((area, i) => (
                        <Badge key={i} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">What You Should Do:</p>
                    <ul className="space-y-2">
                      {alert.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-yellow-500 font-bold mt-0.5">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-yellow-500 hover:bg-yellow-600">
                    More Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Resolved Alerts */}
      {alerts.some((a) => a.status === 'resolved') && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Resolved Alerts</h3>
          <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
            {alerts
              .filter((a) => a.status === 'resolved')
              .map((alert) => (
                <Card key={alert.id} className="bg-gray-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{alert.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        RESOLVED
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* Emergency Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Resources & Hotlines</CardTitle>
          <CardDescription>
            Available resources for disaster response and emergency situations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{resource.name}</h4>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Location:</span> {resource.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Availability:</span> {resource.availability}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Hotlines */}
      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-700">Emergency Hotlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">🚨</div>
              <div>
                <p className="font-semibold text-gray-900">Police Emergency</p>
                <p className="text-lg font-mono text-red-600">911</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🚒</div>
              <div>
                <p className="font-semibold text-gray-900">Fire Emergency</p>
                <p className="text-lg font-mono text-red-600">113</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🚑</div>
              <div>
                <p className="font-semibold text-gray-900">Medical Emergency</p>
                <p className="text-lg font-mono text-red-600">117</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <p className="font-semibold text-gray-900">Barangay Hotline</p>
                <p className="text-lg font-mono text-red-600">(02) 1234-5678</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preparedness Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Disaster Preparedness Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Before Disaster</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Create an emergency plan with your family</li>
                <li>• Prepare a disaster kit with essentials</li>
                <li>• Know evacuation routes</li>
                <li>• Secure important documents</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">During Disaster</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Follow official instructions</li>
                <li>• Evacuate to safe areas</li>
                <li>• Stay with your family</li>
                <li>• Help neighbors if possible</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">After Disaster</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Check on family and friends</li>
                <li>• Document damages</li>
                <li>• Report to authorities</li>
                <li>• Participate in relief efforts</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Important Items</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Water and non-perishable food</li>
                <li>• First aid kit and medicines</li>
                <li>• Flashlight and batteries</li>
                <li>• Copies of important documents</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
