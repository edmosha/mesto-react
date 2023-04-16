import React from "react";

function InfoTooltip(props) {
  const { isOpen, onClose, title, image } = props;

  return (
    <section className={`popup${isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_form popup__container_type_notify" >

        <div className="popup__info-image" style={{backgroundImage: `url('${image}')`,}}></div>
        <h2 className="popup__title">{title}</h2>

        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={ onClose }></button>

      </div>
    </section>
  )
}

export default InfoTooltip;