import {useContext} from "react";
import {CurrentUserContext} from "./contexts/CurrentUserContext";

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  let likeButtonClass = `card__like-btn ${isLiked ? 'card__like-btn_focus' : ''}`

  const handleClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return (
    <li className="card__item">
      <article className="card">

        <img className="card__image" src={card.link} alt={card.name} onClick={ handleClick } />
        <div className="card__title-hidden-container">
          <h2 className="card__title">{card.name}</h2>
        </div>

        <div className="card__like-container">
          <button
            className={likeButtonClass}
            type="button"
            aria-label="лайк"
            onClick={ handleLikeClick }>
          </button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>

        {isOwn && (
          <button
            className="card__delete-btn"
            type="button"
            aria-label="удалить"
            onClick={ handleDeleteClick }>
          </button>
        )}

      </article>
    </li>
  )
}

export default Card;