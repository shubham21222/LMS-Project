import React from "react";
import { Inter } from "next/font/google";
import { Sidebar } from "../components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../components/Sheet";
import Button from "../components/Button";
import { Menu } from "lucide-react";
import { Header } from "../components/header";
import { Stats } from "../components/Stats";
import { RevenueChart } from "../components/revenue-chart";
import { CourseStatus } from "../components/course-status";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-50">
          {/* Sidebar */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-4 mt-4">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden">
            <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="p-4 sm:p-6">
                <Stats />
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="w-full overflow-x-auto">
                    <RevenueChart />
                  </div>
                  <div className="w-full">
                    <CourseStatus />
                  </div>
                </div>
                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg">
                        Pending Requested Withdrawal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold">Name: James Mariyati</p>
                          <p className="text-sm text-gray-500">
                            Email: instructor@example.com
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                          <p className="font-semibold">100 $</p>
                          <p className="text-sm text-gray-500">
                            Requested withdrawal amount
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
