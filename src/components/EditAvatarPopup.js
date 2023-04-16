import PopupWithForm from "./PopupWithForm";
import {useEffect} from "react";
import useValidation from "./hooks/useValidation";

function EditAvatarPopup(props) {

  const { isOpen, isLoading, onClose, onUpdateAvatar } = props;
  const { values, errors, isValid, onChange, checkError, resetValidation } = useValidation();

  const submitButtonClass = `popup__save-btn ${!isValid ? 'popup__save-btn_inactive' : ''}`

  useEffect(() => {
    resetValidation()
  }, [isOpen])

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar
    });
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
        value={values.avatar || ''}
        onChange={ onChange }
        onBlur={ checkError }
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