import React from "react";

function PopupWithForm(props) {

  const { name, title, isOpen, onClose, onSubmit } = props;

  return (
    <section className={`popup${isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_form" >

        <button className="popup__close-btn" type="button" aria-label="закрыть" onClick={ onClose }></button>
        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={`${name}-form`} onSubmit={ onSubmit } noValidate>
          {props.children}
        </form>

      </div>
    </section>
  )
}

export default PopupWithForm;