import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
  state = { usedSearch: false, results: [] }

  _handlerResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0
    ? <p>Sorry! Results not found</p>
    : <MoviesList movies={this.state.results}/>
  }
  render() {
    return (
      <div className="homePage">
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handlerResults}/>
        </div>
        {
          this.state.usedSearch
          ? this._renderResults()
          : <small className="has-text-white">Use el buscador para encontrar la pelicula</small>
        }
        <a className="has-text-success copy" href=""></a>
      </div>
    )
  }
  
}