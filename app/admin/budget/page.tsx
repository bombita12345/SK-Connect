import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminBudgetPage() {
  const budgetSummary = {
    total: 1500000,
    spent: 934000,
    remaining: 566000,
  }

  const categories = [
    { name: 'Infrastructure', allocation: 450000, spent: 312000 },
    { name: 'Health & Wellness', allocation: 300000, spent: 188000 },
    { name: 'Education', allocation: 375000, spent: 241000 },
    { name: 'Community Services', allocation: 225000, spent: 126000 },
    { name: 'Emergency Fund', allocation: 150000, spent: 67000 },
  ]

  const transactions = [
    { id: 'TX-091', date: '2026-03-20', description: 'Health Fair Supplies', category: 'Health & Wellness', amount: 28500, status: 'approved' },
    { id: 'TX-090', date: '2026-03-18', description: 'Youth Center Repair', category: 'Infrastructure', amount: 76400, status: 'approved' },
    { id: 'TX-089', date: '2026-03-17', description: 'Scholarship Release', category: 'Education', amount: 50000, status: 'released' },
    { id: 'TX-088', date: '2026-03-14', description: 'Emergency Food Packs', category: 'Emergency Fund', amount: 22000, status: 'approved' },
  ]

  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <h2 className="page-title">Budget Management</h2>
          <p className="page-subtitle">Track allocations, utilization, and financial activity</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600">Export Budget Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Annual Budget</CardDescription>
            <CardTitle className="text-2xl">PHP {budgetSummary.total.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Spent</CardDescription>
            <CardTitle className="text-2xl text-red-600">PHP {budgetSummary.spent.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Remaining Balance</CardDescription>
            <CardTitle className="text-2xl text-green-600">PHP {budgetSummary.remaining.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Allocation by Category</CardTitle>
          <CardDescription>Spending progress per program area</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {categories.map((item) => {
            const pct = Math.round((item.spent / item.allocation) * 100)
            return (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <span className="text-gray-600">
                    PHP {item.spent.toLocaleString()} / PHP {item.allocation.toLocaleString()} ({pct}%)
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-yellow-500" style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest approved and released disbursements</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.id}</TableCell>
                  <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
                  <TableCell>{tx.description}</TableCell>
                  <TableCell>{tx.category}</TableCell>
                  <TableCell>PHP {tx.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={tx.status === 'released' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}>
                      {tx.status === 'released' ? 'Released' : 'Approved'}
                    </Badge>
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
