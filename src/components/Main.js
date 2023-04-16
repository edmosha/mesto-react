import {useContext} from "react";
import {CurrentUserContext} from "./contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const { cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete } = props;
  const currentUser = useContext(CurrentUserContext)

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container" onClick={ onEditAvatar }>
          <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name}/>
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__info-container">

          <div className="profile__info-container-header">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-btn" type="button"
                    aria-label="редактировать" onClick={ onEditProfile }></button>
          </div>

          <p className="profile__description">{currentUser.about}</p>

        </div>
        <button className="profile__add-card-btn" type="button"
                aria-label="добавить новый пост" onClick={ onAddPlace }></button>
      </section>

      <section className="post-feed">
        <ul className="post-feed__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={ onCardClick }
              onCardLike={ onCardLike }
              onCardDelete={ onCardDelete }
            />
          ))}
        </ul>
      </section>
  </>
  )
}

export default Main;