import { useState } from 'react';

export const useVideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return {
    isOpen,
    openVideo,
    closeVideo
  };
};

export default useVideoModal;