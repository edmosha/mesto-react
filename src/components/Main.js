import React from "react";
import api from '../utils/api'
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [ userName, setUserName ] = React.useState('');
  const [ userDescription, setUserDescription ] = React.useState('');
  const [ userAvatar, setUserAvatar ] = React.useState('');
  const [ cards, setCards ] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    api.getInitialCards().then(res => {
      setCards(res.map(card => ({
        id: card._id,
        src: card.link,
        title: card.name,
        ownerId: card.owner._id,
        likes: card.likes
      })));
    })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={ onEditAvatar }>
          <img className="profile__avatar" src={userAvatar} alt={userName}/>
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__info-container">

          <div className="profile__info-container-header">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-btn" type="button"
                    aria-label="редактировать" onClick={ onEditProfile }></button>
          </div>

          <p className="profile__description">{userDescription}</p>

        </div>
        <button className="profile__add-card-btn" type="button"
                aria-label="добавить новый пост" onClick={ onAddPlace }></button>
      </section>

      <section className="post-feed">
        <ul className="post-feed__list">
          {cards.map((card) => (
            <Card key={card.id} card={card} onCardClick={ onCardClick } />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main;