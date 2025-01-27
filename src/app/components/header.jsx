import { Bell, ExternalLink, Settings } from "lucide-react"
import Button from "./Button"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex flex-col gap-2 border-b px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <h1 className="text-lg font-semibold sm:text-xl">Academy Learning Club</h1>
        <p className="text-sm text-gray-500">Admin Panel</p>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
          <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Image
          src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/admin/-1716717339.jpg"
          alt="Avatar"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full sm:h-9 sm:w-9"
        />
      </div>
    </header>
  ) 
}

