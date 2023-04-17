import React from "react";
import Popup from "./Popup";

function PopupWithForm({ children, name, title, isOpen, onClose, onSubmit }) {

  return (
    <Popup isOpen={isOpen} onClose={onClose} type="form">
      <h2 className="popup__title">{title}</h2>

      <form className="popup__form" name={`${name}-form`} onSubmit={ onSubmit } noValidate>
        {children}
      </form>
    </Popup>
  )
}

export default PopupWithForm;