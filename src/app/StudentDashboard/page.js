import Image from "next/image"
import { Play, Volume2, Maximize2 } from "lucide-react"
import { Progress } from "../components/progress"
import {  TabsList, TabsTrigger } from "../components/tabs"

import { Tabs } from "../components/tabs"


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="flex items-center gap-2">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZESZSykDM3CGrAZrAzOH2B4fF9shkQ.png"
            alt="Academy Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          /> */}
          <span className="text-xl font-semibold">Academy</span>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="hidden md:block text-sm">The Complete Web Development with Bootstrap</h1>
          <button className="px-4 py-2 bg-gray-800 rounded-md text-sm">My Courses</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Video Section */}
        <div className="flex-1 p-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZESZSykDM3CGrAZrAzOH2B4fF9shkQ.png"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
            </div>
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex flex-col gap-2">
                <Progress value={33} className="h-1" />
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-white/80">
                      <Play className="w-5 h-5" />
                    </button>
                    <span className="text-sm">-07:40</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:text-white/80">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <Progress value={60} className="w-24 h-1" />
                    <button className="hover:text-white/80">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="summary" className="mt-4">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="summary"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                📋 Summary
              </TabsTrigger>
              <TabsTrigger
                value="live"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                🎥 Live class
              </TabsTrigger>
              <TabsTrigger
                value="certificate"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                🎓 Certificate
              </TabsTrigger>
              <TabsTrigger
                value="forum"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                💬 Forum
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-96 p-4 border-l">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Course curriculum</h2>
            <div className="text-sm text-muted-foreground">10.00% Completed (2/20)</div>

            {/* Course Sections */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Getting started</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📹</span>
                    <span>Machine Learning Overview</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Machine Learning</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📹</span>
                    <span>Machine Learning Goals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>📹</span>
                    <span>Machine Learning and Cross-Validation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📹</span>
                    <span>Types of Machine Learning 1</span>
                    <span className="ml-auto">00:06:50</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📹</span>
                    <span>Types of Machine Learning 2</span>
                    <span className="ml-auto">00:06:49</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">More Knowledge</h3>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Deep into Data Science</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

