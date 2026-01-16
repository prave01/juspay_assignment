import Image from 'next/image'

export function RevenueByLocation() {
  return (
    <div
      className="rounded-lg w-[202px] flex items-center justify-start gap-4
        flex-col bg-[#F7F9FB] dark:bg-[#272727] p-4"
    >
      <p className="text-[14px] font-semibold">Revenue by Location</p>
      <Image
        width={500}
        height={500}
        className="w-38.5 h-20.5"
        src={'/image.png'}
        alt={''}
      />

      <div className="w-full space-y-4 mt-2">
        {[
          { name: 'New York', revenue: 72 },
          { name: 'San Francisco', revenue: 39 },
          { name: 'Sydney', revenue: 25 },
          { name: 'Singapore', revenue: 61 },
        ].map((location) => (
          <div key={location.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-medium text-gray-700 dark:text-white"
              >
                {location.name}
              </span>
              <span className="text-xs font-semibold text-primary">
                {location.revenue}K
              </span>
            </div>
            <div
              className="h-0.5 w-full bg-blue-50 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-[#A5C4D4] rounded-full"
                style={{
                  width: `${(location.revenue / 72) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
