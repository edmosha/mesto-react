import React from "react";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={ onEditAvatar }>
          <img className="profile__avatar" src="src#" alt="Аватар"/>
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__info-container">

          <div className="profile__info-container-header">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-btn" type="button"
                    aria-label="редактировать" onClick={ onEditProfile }></button>
          </div>

          <p className="profile__description">Исследователь океана</p>

        </div>
        <button className="profile__add-card-btn" type="button"
                aria-label="добавить новый пост" onClick={ onAddPlace }></button>
      </section>

      <section className="post-feed">
        <ul className="post-feed__list">

        </ul>

      </section>

    </main>
  )
}

export default Main;