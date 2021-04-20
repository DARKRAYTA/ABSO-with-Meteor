import React from 'react';
import { Link } from 'react-router-dom'

export default function NavItem({ href, isActive, children }) {
    return (
      <li className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">
        <a
          href={href}
          className={`block px-4 py-2 rounded-md ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}
        >
          {children}
        </a>
      </li>
    )
}  