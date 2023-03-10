import React from "react";

function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  return (
    <li className="card__item" onClick={ handleClick }>
      <article className="card">
        <img className="card__image" src={props.card.src} alt="" />
        <div className="card__title-hidden-container">
          <h2 className="card__title">{props.card.title}</h2>
        </div>
        <div className="card__like-container">
          <button className="card__like-btn" type="button" aria-label="лайк"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
        <button className="card__delete-btn" type="button" aria-label="удалить"></button>
      </article>
    </li>
  )
}

export default Card;