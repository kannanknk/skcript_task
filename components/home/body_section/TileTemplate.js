import React from "react";

const TileTemplate = React.forwardRef(
  ({ children, className, bg, iconClassName, iconStroke }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative hover:cursor-pointer rounded-3xl group ${className}`}
        style={{
          boxShadow: "4px 12px 40px 6px rgba(0,0,0,0.09)",
          background: bg,
        }}
      >
        {children}
        <button
          type="button"
          className={`text-white absolute bottom-5 right-5 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center ${iconClassName}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={iconStroke}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    );
  }
);

export default TileTemplate;
