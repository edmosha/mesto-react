import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState({ id: '', title: '', src: '' });

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ id: '', title: '', src: '' })
  }

  const handleCardClick = (card) => {
    setSelectedCard({
      id: card.id,
      title: card.title,
      src: card.src
    })
  }

  return (
    <div className="App">

      <Header />
      <Main
        onEditProfile={ () => setIsEditProfilePopupOpen(true) }
        onAddPlace={ () => setIsAddPlacePopupOpen(true) }
        onEditAvatar={ () => setIsEditAvatarPopupOpen(true) }
        onCardClick={ handleCardClick }
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={ closeAllPopups }
      >

        <input className="popup__input popup__input_type_name" id="name" type="text" name="name" placeholder="Имя"
               minLength="2" maxLength="40" required />
        <span className="popup__input-error popup__input-error_field_name"></span>

        <input className="popup__input popup__input_type_description" id="description" type="text"
               name="description" placeholder="Описание профиля" minLength="2" maxLength="200" required />
        <span className="popup__input-error popup__input-error_field_description"></span>

        <button className="popup__save-btn" type="submit">Сохранить</button>

      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={ closeAllPopups }
      >

        <input className="popup__input popup__input_type_card-name" id="card-name" type="text" name="title"
               placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error popup__input-error_field_card-name"></span>

        <input className="popup__input popup__input_type_link" id="link" type="url" name="image"
               placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_field_link"></span>

        <button className="popup__save-btn" type="submit">Создать</button>

      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={ closeAllPopups }
      >

        <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar"
               placeholder="Ссылка на картинку" required />
        <span className="popup__input-error popup__input-error_field_avatar"></span>
        <button className="popup__save-btn" type="submit">Сохранить</button>

      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={ closeAllPopups } />

      <section className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_form">

          <button className="popup__close-btn popup__close-btn_type_confirm" type="button"
                  aria-label="закрыть"></button>
          <h2 className="popup__title">Вы уверены?</h2>

          <form className="popup__form popup__form_type_confirm" name="confirm-form" noValidate>
            <button className="popup__save-btn" type="submit">Да</button>
          </form>

        </div>
      </section>

    </div>
  );
}

export default App;

