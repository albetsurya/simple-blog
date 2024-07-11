import React from "react";

const ConfirmModal = ({ formData, handleModalClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col gap-3 bg-gray-200 p-6 rounded-lg text-gray-900 w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          Form Submitted Successfully
        </h2>
        <div className="flex flex-col gap-1">
          <strong>Name:</strong>
          <p className="rounded-lg border bg-gray-300  p-2.5 break-words">
            {formData.name.trim()}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="w-24 block">Email:</strong>
          <p className="rounded-lg border bg-gray-300 p-2.5 break-words">
            {formData.email.trim()}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="block">Message:</strong>
          <p className="rounded-lg border bg-gray-300 p-2.5 break-words">
            {formData.message.trim()}
          </p>
        </div>
        <button
          onClick={handleModalClose}
          className="bg-black text-white hover:bg-gray-800 hover:text-gray-200 w-full px-4 py-2 rounded mt-4"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
