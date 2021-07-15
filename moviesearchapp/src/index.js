import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css'
import SearchMovies from './searchmovies';

class Main extends React.Component{
  render(){
    return (
      <div className="container">
          <h1 className="title"> React Movie Search </h1>
          <SearchMovies/>
      </div>
      
    );
  }
}
 


ReactDOM.render(<Main/>, document.getElementById('root'));