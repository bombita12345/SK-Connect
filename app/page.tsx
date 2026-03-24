import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  CalendarDays,
  Briefcase,
  Handshake,
  Eye,
  Target,
  Rocket,
  Lightbulb,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-600">SK-CONNECT</h1>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">
                Empowering Youth, Connecting Communities
              </h2>
              <p className="text-xl text-gray-600">
                SK-CONNECT is your barangay's hub for youth engagement, community projects, and transparent governance. Connect with your community and make a difference.
              </p>
              <div className="flex gap-4">
                <Link href="/auth/sign-up">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                    Join Now
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button size="lg" variant="outline">
                    Login
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <CalendarDays className="mb-2 h-8 w-8 text-yellow-600" />
                <h3 className="font-semibold text-gray-900">Events</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Discover community events and activities
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Projects</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Participate in community projects
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <Handshake className="mb-2 h-8 w-8 text-green-600" />
                <h3 className="font-semibold text-gray-900">Volunteering</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Find volunteer opportunities
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <Eye className="mb-2 h-8 w-8 text-red-600" />
                <h3 className="font-semibold text-gray-900">Transparency</h3>
                <p className="text-sm text-gray-600 mt-2">
                  View barangay budgets and reports
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Join SK-CONNECT?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Target className="mb-4 h-9 w-9 text-yellow-600" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Stay Connected
                </h4>
                <p className="text-gray-600">
                  Keep up with the latest news, announcements, and opportunities in your barangay.
                </p>
              </div>
              <div>
                <Rocket className="mb-4 h-9 w-9 text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Make an Impact
                </h4>
                <p className="text-gray-600">
                  Participate in projects and volunteer opportunities that make a real difference.
                </p>
              </div>
              <div>
                <Lightbulb className="mb-4 h-9 w-9 text-amber-600" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparent Governance
                </h4>
                <p className="text-gray-600">
                  Access budgets, resolutions, and reports to stay informed about your barangay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 SK-CONNECT. Empowering Youth in Your Barangay.</p>
        </div>
      </footer>
    </div>
  );
}
