import PopupWithForm from "./PopupWithForm";

function ErrorPopup(props) {
  const { isOpen, onClose } = props;

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   // onCardDelete();
  // }

  return (
    <PopupWithForm
      name="confirm-error"
      title="Упс! Что-то пошло не так."
      isOpen={isOpen}
      onClose={ onClose }
    >

      <button className="popup__save-btn" type="button" onClick={ onClose }>Ок</button>

    </PopupWithForm>
  )
}

export default ErrorPopup;