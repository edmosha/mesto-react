import PopupWithForm from "./PopupWithForm";
import {useContext, useEffect} from "react";
import {CurrentUserContext} from "./contexts/CurrentUserContext";
import useValidation from "./hooks/useValidation";

function EditProfilePopup(props) {

  const { isOpen, isLoading, onClose, onUpdateUser } = props;
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, onChange,  checkError, resetValidation } = useValidation();
  const submitButtonClass = `popup__save-btn ${!isValid ? 'popup__save-btn_inactive' : ''}`

  useEffect(() => {
    resetValidation({
      name: currentUser.name,
      description: currentUser.about
    })
  }, [isOpen, currentUser])

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={ onClose }
      onSubmit={ handleSubmit }
    >

      <input
        className="popup__input"
        value={values.name || ''}
        onChange={ onChange }
        onBlur={ checkError }
        id="name"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error">{errors.name}</span>

      <input
        className="popup__input"
        value={values.description || ''}
        onChange={ onChange }
        onBlur={ checkError }
        id="description"
        type="text"
        name="description"
        placeholder="Описание профиля"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error">{errors.description}</span>

      <button className={submitButtonClass} type="submit" disabled={!isValid}>
        {isLoading ? 'Сохранение...' : 'Сохранить'}
      </button>

    </PopupWithForm>
  )
}

export default EditProfilePopup;