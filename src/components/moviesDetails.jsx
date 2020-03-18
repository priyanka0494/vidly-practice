import React from 'react';

const MoviesDetails = ({match: {params: {id}}}) => {
    return ( <h1>
        Movies from id: {id}
    </h1> );
}
 
export default MoviesDetails;