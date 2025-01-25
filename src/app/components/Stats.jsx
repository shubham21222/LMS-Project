"use client";

function StatCard({ title, value, className }) {
  return (
    <div className={`rounded-lg bg-white p-6 shadow-sm ${className}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <h3 className="mt-2 text-3xl font-semibold">{value}</h3>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <StatCard title="Number of Courses" value={46} className="w-full" />
      <StatCard title="Number of Lessons" value={603} className="w-full" />
      <StatCard title="Number of Enrollment" value={22} className="w-full" />
      <StatCard title="Number of Students" value={7} className="w-full" />
      <StatCard
        title="Number of Instructors"
        value={4}
        className="w-full sm:col-span-2 lg:col-span-1"
      />
    </div>
  );
}
