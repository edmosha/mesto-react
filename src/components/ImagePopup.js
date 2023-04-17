import React from "react";
import Popup from "./Popup";

function ImagePopup({ card, onClose }) {
  const isOpen = Boolean(card.id);

  return(
    <Popup isOpen={isOpen} onClose={ onClose } type="image">
      <img className="popup__image" src={card.src} alt={card.title} />
      <h3 className="popup__sign">{card.title}</h3>
    </Popup>
  )
}

export default ImagePopup;