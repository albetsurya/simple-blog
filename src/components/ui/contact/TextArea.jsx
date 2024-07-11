import React from "react";

const TextArea = ({ id, label, placeholder, value, onChange, error }) => {
  return (
    <div className="relative mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows="4"
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="text-sm text-gray-500">{value.length}/80</p>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextArea;
