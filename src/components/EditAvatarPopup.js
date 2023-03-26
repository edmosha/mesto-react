import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";
import useValidation from "./hooks/useValidation";

function EditAvatarPopup(props) {

  const { isOpen, isLoading, onClose, onUpdateAvatar } = props;

  const inputRef = useRef(props);

  const { errors, isValid, resetValidation, checkValidity } = useValidation(inputRef);
  const submitButtonClass = `popup__save-btn ${!isValid ? 'popup__save-btn_inactive' : ''}`

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });

    resetValidation();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={ onClose }
      onSubmit={ handleSubmit }
    >

      <input
        className="popup__input"
        onChange={ checkValidity }
        ref={inputRef}
        id="avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error">{errors.avatar}</span>
      <button className={submitButtonClass} type="submit" disabled={!isValid}>
        {isLoading ? 'Сохранение...' : 'Сохранить'}
      </button>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;