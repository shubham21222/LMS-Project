"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  BookOpen,
  Grid,
  Users,
  Calendar,
  MessageSquare,
  Mail,
  Settings,
  User,
  Contact,
  FileText,
} from "lucide-react"

const menuItems = [
  { name: "Dashboard", icon: BarChart, href: "/" },
  { name: "Category", icon: Grid, href: "/category" },
  { name: "Course", icon: BookOpen, href: "/course" },
  { name: "Bootcamp", icon: Calendar, href: "/bootcamp" },
  { name: "Tutor Booking", icon: Calendar, href: "/tutor-booking" },
  { name: "Student enrollment", icon: Users, href: "/enrollment" },
  { name: "Payment Report", icon: FileText, href: "/payment" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Message", icon: MessageSquare, href: "/message" },
  { name: "Newsletter", icon: Mail, href: "/newsletter" },
  { name: "Contacts", icon: Contact, href: "/contacts" },
  { name: "Blogs", icon: FileText, href: "/blogs" },
]

const settingsItems = [
  { name: "System Settings", icon: Settings, href: "/settings" },
  { name: "Manage Profile", icon: User, href: "/profile" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="p-4">
        <h1 className="text-xl font-bold text-purple-600">Academy</h1>
      </div>

      <div className="flex flex-1 flex-col space-y-1 p-4">
        <div className="mb-4">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">MAIN MENU</h2>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-2 py-2 text-sm font-medium ${
                pathname === item.href ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">SETTINGS</h2>
          {settingsItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-2 py-2 text-sm font-medium ${
                pathname === item.href ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

