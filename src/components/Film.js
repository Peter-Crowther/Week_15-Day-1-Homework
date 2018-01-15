import React from 'react';

class Film extends React.Component {

  render() {
    return(
      <div className="film">
        <h4>{ this.props.title } { this.props.children }</h4>
      </div>
    );
  }


}




export default Film;
