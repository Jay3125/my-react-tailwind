import React, { ReactNode, useState } from 'react';

type DisclosureProps = {
  title: string;
  children: ReactNode;
};

const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500"
        onClick={handleToggle}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? 'transform rotate-90' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6 6L14 10L6 14V6Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 mt-2 bg-gray-100">{children}</div>
      )}
    </div>
  );
};

export default Disclosure;
