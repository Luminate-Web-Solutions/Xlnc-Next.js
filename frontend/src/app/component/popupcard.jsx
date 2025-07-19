'use client';
import React, { useState } from 'react';

export default function PopupCard({ img, title, cardDesc, popupDesc }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      {/* Card Preview */}
      <div
        onClick={openPopup}
        className="cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 transform hover:scale-105"
      >
        <div className="w-full h-28 mb-4 overflow-hidden rounded-lg">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-md font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{cardDesc}</p>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
              onClick={closePopup}
            >
              &times;
            </button>
            <img src={img} alt={title} className="w-full h-52 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-sm text-gray-700">{popupDesc}</p>
          </div>
        </div>
      )}
    </>
  );
}
