import React from 'react';

export default function List({ children }) {
    return (
      <ul className="w-2/5 divide-gray-100 absolute right-8 top-24">
        {children}
      </ul>
    )
}