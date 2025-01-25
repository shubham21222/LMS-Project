'use client'

import React, { useState } from 'react';

const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {React.Children.map(children, child => 
        React.cloneElement(child, { 
          onClick: () => setIsOpen(!isOpen) 
        })
      )}
    </div>
  );
};

const SheetTrigger = ({ children, onClick }) => {
  return React.cloneElement(children, { onClick });
};

const SheetContent = ({ children, side = 'right', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sideClasses = {
    left: 'left-0 top-0 h-full w-64 transform',
    right: 'right-0 top-0 h-full w-64 transform'
  };

  const transitionClasses = isOpen 
    ? 'translate-x-0 opacity-100' 
    : 'translate-x-full opacity-0';

  return (
    <div 
      className={`
        fixed 
        ${sideClasses[side]} 
        ${transitionClasses} 
        bg-white 
        shadow-lg 
        transition-all 
        duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { Sheet, SheetContent, SheetTrigger };