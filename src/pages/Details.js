import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '4287ad07';

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(movie => {
      console.log({movie})
      this.setState({movie})
    })
  }

  _goBack() {
    window.history.back()
  }

  componentDidMount () {
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div className="details-page">
        <div className="button-goBack">
          <ButtonBackToHome />
        </div>
        <div className="movie-details">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={Poster} alt={Title}/>
            </figure>
          <h1 className="title is-4">{Title}</h1>
          </div>
          <h3 className="subtitle is-6"><span className="has-text-weight-bold">Actores:</span> { Actors }</h3>
          <h3 className="subtitle is-6"><span className="has-text-weight-bold">Score:</span> { Metascore }</h3>
          <p className="subtitle is-6"><span className="has-text-weight-bold">Synopsis: </span> { Plot }</p>
        </div>
      </div>
    )
  }
}