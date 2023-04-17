import React from "react";
import Popup from "./Popup";

function InfoTooltip({ isOpen, onClose, title, image }) {

  return (
    <Popup isOpen={isOpen} onClose={ onClose } type="notify">
      <div className="popup__info-image" style={{backgroundImage: `url('${image}')`,}}></div>
      <h2 className="popup__title">{title}</h2>
    </Popup>
  )
}

export default InfoTooltip;