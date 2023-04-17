import React, {useEffect} from 'react';

const Popup = ({ children, type, isOpen, onClose }) => {

  const popupClass = `popup popup_type_${type} ${isOpen ? ' popup_opened' : ''}`
  const popupContainerClass = `popup__container popup__container_type_${type}`

  useEffect(() => {
    if (!isOpen) return;

    const handleEscClick = (evt) => {
      evt.key === 'Escape' && onClose();
    }

    document.addEventListener("keydown", handleEscClick);

    return () => document.removeEventListener("keydown", handleEscClick);
  }, [isOpen, onClose]);

  const handleClickOverlay = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  }

  return (
    <section onClick={ handleClickOverlay } className={popupClass}>
      <div className={popupContainerClass}>
        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={ onClose }></button>
        {children}
      </div>
    </section>
  );
};

export default Popup;