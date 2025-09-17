import { useState } from 'react';

export const useCalendarModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = () => setIsOpen(true);
  const closeCalendar = () => setIsOpen(false);

  return {
    isOpen,
    openCalendar,
    closeCalendar
  };
};

export default useCalendarModal;