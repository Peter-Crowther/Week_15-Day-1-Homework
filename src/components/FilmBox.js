import React from 'react';
import FilmList from './FilmList'

class FilmBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      films: [
        {id: 1, title: "The Hunt for Red October", times: "Showtimes"},
        {id: 2, title: "Local Hero", times: "Showtimes"}
      ]
    }
  }

  render() {
    return(
      <div className= "film-box">
        <FilmList films={this.state.films}/>
      </div>
    );
  }


}


export default FilmBox;
