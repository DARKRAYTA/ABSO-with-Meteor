import React from 'react';

export default function Nav({ children }) {
    return (
      <nav className="fixed select-none bg-pink-600 z-10 lg:flex lg:items-stretch w-full">
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow justify-end">
          <ul className="flex space-x-2">
            {children}
          </ul>
        </div>
      </nav>
    )
  }