import React from 'react';
import Film from './Film';

class FilmList extends React.Component{
  render() {

  const filmNodes = this.props.films.map(function(film) {
      return(
        <Film key={ film.id } title={film.title}>
          { film.times }
        </Film>
      );
    });


    return(
      <div className="film-list">
        { filmNodes }
      </div>
    );
  }


}


export default FilmList;
