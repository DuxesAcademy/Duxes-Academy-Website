import React from "react";

const Progress = ({ value = 0, max = 100, className = "" }) => {
  const percentage = Math.min(Math.max(value, 0), max);

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={max}
      className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden ${className}`}
    >
      <div
        className="bg-blue-600 dark:bg-blue-400 h-4 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export { Progress };
