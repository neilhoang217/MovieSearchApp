import React from 'react';

export default function SearchMovies(){
    return (
    
        <form className="form">
            <label className="lable" htmlFor="query" >Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Enter your favorite movie"></input>
            <button className="button" type="submit">Search</button>
        </form>

   
    )
}

