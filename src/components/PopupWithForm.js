import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name}${props.isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_form" >

        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={ props.onClose }></button>
        <h2 className="popup__title">{props.title}</h2>

        <form className="popup__form" name={`${props.name}-form`} noValidate>
          {props.children}
        </form>

      </div>
    </section>
  )
}

export default PopupWithForm;