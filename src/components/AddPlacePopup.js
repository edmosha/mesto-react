import PopupWithForm from "./PopupWithForm";
import useValidation from "./hooks/useValidation";

function AddPlacePopup(props) {

  const { isOpen, isLoading, onClose, onAddPlace } = props;
  const { values, errors, isValid, onChange, resetValidation } = useValidation();

  const submitButtonClass = `popup__save-btn ${!isValid ? 'popup__save-btn_inactive' : ''}`

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({
      title: values.title,
      image: values.image
    });

    resetValidation();
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={ handleSubmit }
    >

      <input
        className="popup__input"
        value={values.title || ''}
        onChange={ onChange }
        id="card-name"
        type="text"
        name="title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error">{errors.title || ''}</span>

      <input
        className="popup__input"
        value={values.image || ''}
        onChange={ onChange }
        id="link"
        type="url"
        name="image"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error">{errors.image || ''}</span>

      <button className={submitButtonClass} type="submit" disabled={!isValid}>
        {isLoading ? 'Создание...' : 'Создать'}
      </button>
    </PopupWithForm>
  )
}

export default AddPlacePopup;