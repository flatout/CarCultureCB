'use client';

import React, { useState } from 'react';

interface NFTDetailsProps {
  initialTitle?: string;
  initialDescription?: string;
}

export default function NFTDetails({ 
  initialTitle = "Rules of the Road 1",
  initialDescription = "A unique NFT capturing the essence of road safety and driving culture."
}: NFTDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSave = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="mt-6 text-center">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-xl font-bold text-center"
              placeholder="Enter NFT Title"
            />
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full text-gray-400 text-center"
              placeholder="Enter NFT Description"
              rows={2}
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 text-center group relative">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 hover:text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
    </div>
  );
} 