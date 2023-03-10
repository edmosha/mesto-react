import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";

function App() {

  return (
    <div className="App">

      <Header />
      <Main/>
      <Footer />

      <template id="card">
        <li className="card__item">
          <article className="card">
            <img className="card__image" src="src#" alt="" />
              <div className="card__title-hidden-container">
                <h2 className="card__title"></h2>
              </div>
              <div className="card__like-container">
                <button className="card__like-btn" type="button" aria-label="лайк"></button>
                <p className="card__like-counter">10</p>
              </div>
              <button className="card__delete-btn" type="button" aria-label="удалить"></button>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;

