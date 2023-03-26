class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUserInfo() { 
    return this._request(
      this._baseUrl + '/users/me', {
        headers: this._headers
      })
  }

  getInitialCards() {
    return this._request(
      this._baseUrl + '/cards', {
        headers: this._headers
      })
  }

  setUserInfo(name, about) {
    return this._request(
      this._baseUrl + '/users/me', {
        method: 'PATCH',
        headers: {...this._headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
  }

  postNewCard(title, image) {
    return this._request(
      this._baseUrl + '/cards', {
        method: 'POST',
        headers: {...this._headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: title,
          link: image
        })
      })
  }

  deleteCard(id) {
    return this._request(
      this._baseUrl + '/cards/' + id, {
        method: 'DELETE',
        headers: this._headers
      })
  }

  setLike(cardId) {
    return this._request(
      this._baseUrl + '/cards/' + cardId + '/likes', {
        method: 'PUT',
        headers: this._headers
      })
  }

  removeLike(cardId) {
    return this._request(
      this._baseUrl + '/cards/' + cardId + '/likes', {
        method: 'DELETE',
        headers: this._headers
      })
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.removeLike(cardId) : this.setLike(cardId);
  }

  updateAvatar(avatar) {
    return this._request(
      this._baseUrl + '/users/me/avatar', {
        method: 'PATCH',
        headers: {...this._headers, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          avatar: avatar
        })
      })
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '18326de1-ceb2-44e2-90f2-11d350735e1c'
  }
})

export default api;