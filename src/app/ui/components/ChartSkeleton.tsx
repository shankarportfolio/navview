"use client";

export default function ChartSkeleton() {
  return (
    <div className="w-full">
      
      {/* Top section skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </div>

      {/* Chart area skeleton */}
      <div className="h-87.5 w-full rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    </div>
  );
}