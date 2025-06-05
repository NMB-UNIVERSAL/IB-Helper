import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, transitionKey }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Reset animation state
    setIsVisible(false);
    
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [transitionKey]);

  return (
    <div 
      className={`page-transition ${isVisible ? 'page-visible' : 'page-hidden'}`}
      key={transitionKey}
    >
      {children}
    </div>
  );
};

export default PageTransition; 