import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup(props) {

  const { isOpen, isLoading, onClose, onCardDelete } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onCardDelete();
  }

  return (
    <PopupWithForm
      name="confirm-delete"
      title="Вы уверны?"
      isOpen={isOpen}
      onClose={ onClose }
      onSubmit={ handleSubmit }
    >

      <button className="popup__save-btn" type="submit">{isLoading ? 'Удаление...' : 'Да'}</button>

    </PopupWithForm>
  )
}

export default ConfirmDeleteCardPopup;