"use client";

export default function BouncingText({ title }) {
  
    return (
      <div className="absolute bottom-20 w-dvw flex flex-col items-center z-10 animate-bounce">
        <p className="bouncing-text">{title}</p>
        {/* Down Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-neutral-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    );
  }
  