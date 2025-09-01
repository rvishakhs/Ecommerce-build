import React from 'react'
import main1 from "../images/main-banner.jpg"
import subimg1 from "../images/catbanner-01.jpg"
import subimg2 from "../images/catbanner-02.jpg"
import subimg3 from "../images/catbanner-03.jpg"
import subimg4 from "../images/catbanner-04.jpg"
import Button from './Button'

function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-4">
  {/* Main Banner */}
  <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
    <img
      src={main1}
      alt="img"
      className="w-full h-[300px] sm:h-[350px] md:h-[425px] lg:h-[425px] rounded-xl object-cover"
    />
    <div className="absolute top-10 md:top-16 left-4 md:left-12 flex flex-col space-y-2">
      <h3 className="font-bold text-lg md:text-xl text-orange-600 tracking-wider">
        SUPERCHARGED FOR PROS
      </h3>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
        Special Sale
      </h2>
      <h4 className="font-medium text-sm sm:text-base">
        From $999.00 or $41.62/mo.
      </h4>
      <h4 className="font-medium text-sm sm:text-base">for 24 month.*</h4>
      <div className="mt-4">
        <Button text="Buy Now" />
      </div>
    </div>
  </div>

  {/* Sub Banners */}
  <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
    {[subimg1, subimg2, subimg3, subimg4].map((img, idx) => (
      <div
        key={idx}
        className="relative hover:scale-105 transition-transform duration-200 ease-in cursor-pointer"
      >
        <img
          src={img}
          alt={`subimg${idx + 1}`}
          className="w-full sm:h-[180px] md:h-[200px] lg:h-[200px] rounded-xl object-cover"
        />
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col space-y-1">
          <h3 className="font-bold text-xs sm:text-sm text-orange-600 tracking-wide uppercase">
            {idx === 0
              ? "Best Sale"
              : idx === 1
              ? "15% off"
              : idx === 2
              ? "NEW Arrival"
              : "Free Engraving"}
          </h3>
          <h2 className="font-bold text-sm sm:text-xl tracking-wide">
            {idx === 0
              ? "Laptop Max"
              : idx === 1
              ? "Smart Watch 7"
              : idx === 2
              ? "Buy IPad Air"
              : "Airpods Max"}
          </h2>
          <div className="text-xs sm:text-sm">
            {idx === 0 && (
              <>
                <h4>From $1699.00 or</h4>
                <h4>$64.62/month</h4>
              </>
            )}
            {idx === 1 && (
              <>
                <h4>Shop the latest band</h4>
                <h4>styles and colors</h4>
              </>
            )}
            {idx === 2 && (
              <>
                <h4>From $599.00 or</h4>
                <h4>$49.91/mo for 12 mo*</h4>
              </>
            )}
            {idx === 3 && (
              <>
                <h4>High-Fidelity playback &</h4>
                <h4>Ultra-low distortion</h4>
              </>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Banner