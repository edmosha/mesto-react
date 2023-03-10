import React from "react";

function ImagePopup(props) {
  return(
    <section className={`popup  popup_type_view-picture${props.card.id ? ' popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_picture">
        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.src} alt="" />
        <h3 className="popup__sign">{props.card.title}</h3>
      </div>
    </section>
  )
}

export default ImagePopup;