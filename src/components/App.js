import {useEffect, useState} from "react";
import {CurrentUserContext} from './contexts/CurrentUserContext';
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";

function App() {

  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [ isConfirmCardDeletePopupOpen, setIsConfirmCardDeletePopupOpen] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({ id: '', title: '', src: '' });
  const [ isLoading, setIsLoading ] = useState(false);

  const [ currentUser, setCurrentUser ] = useState({});
  const [ cards, setCards ] = useState([]);
  const [ cardForDelete, setCardForDelete ] = useState({});

  useEffect(() => {
    api.getUserInfo().then(res => setCurrentUser(res));

    api.getInitialCards().then(res => setCards(res));
  }, [])

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmCardDeletePopupOpen(false);
    setSelectedCard({ id: '', title: '', src: '' })
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards(state => state.map(c => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    setCardForDelete(card);
    setIsConfirmCardDeletePopupOpen(true);
  }

  const handleConfirmCardDelete = () => {
    setIsLoading(true);

    api.deleteCard(cardForDelete._id).then(() => {

      setCards(state => state.filter(c => c._id !== cardForDelete._id));
      setCardForDelete({});
      closeAllPopups();
      setIsLoading(true);
    })
  }

  const handleCardClick = (card) => {
    setSelectedCard({
      id: card._id,
      title: card.name,
      src: card.link
    })
  }

  const handleUpdateUser = ({ name, about }) => {
    setIsLoading(true);

    api.setUserInfo(name, about).then((newUserData) => {
      setCurrentUser(newUserData);
      closeAllPopups();
      setIsLoading(false);
    })
  }

  const handleUpdateAvatar = ({ avatar }) => {
    setIsLoading(true);

    api.updateAvatar(avatar).then((newUserData) => {

      setCurrentUser(newUserData);
      closeAllPopups();
      setIsLoading(false);
    })
  }

  const handleAddPlaceSubmit = ({ title, image }) => {
    setIsLoading(true);

    api.postNewCard(title, image).then(newCard => {

      setCards([ newCard, ...cards ])
      closeAllPopups();
      setIsLoading(false);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main
          cards={cards}
          onEditProfile={ () => setIsEditProfilePopupOpen(true) }
          onAddPlace={ () => setIsAddPlacePopupOpen(true) }
          onEditAvatar={ () => setIsEditAvatarPopupOpen(true) }
          onCardClick={ handleCardClick }
          onCardLike={ handleCardLike }
          onCardDelete={ handleCardDelete }
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isLoading={isLoading}
          onClose={ closeAllPopups }
          onUpdateUser={ handleUpdateUser }
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isLoading={isLoading}
          onClose={ closeAllPopups }
          onUpdateAvatar={ handleUpdateAvatar }
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isLoading={isLoading}
          onClose={ closeAllPopups }
          onAddPlace={ handleAddPlaceSubmit }
        />

        <ConfirmDeleteCardPopup
          isOpen={isConfirmCardDeletePopupOpen}
          isLoading={isLoading}
          onClose={ closeAllPopups }
          onCardDelete={ handleConfirmCardDelete }
        />

        <ImagePopup card={selectedCard} onClose={ closeAllPopups } />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

