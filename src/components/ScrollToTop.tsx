import { useEffect } from 'react';

interface ScrollToTopProps {
  currentPage: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ currentPage }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  return null;
};

export default ScrollToTop; 