import React from "react";

function Moviecard({ movie }) {
    return (
        <>
            <div className='movie'>
                <div>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                        alt="Poster" />
                </div>

                <div>
                    <span>{movie.Title}</span>
                </div>
            </div>
        </>
    )
}

export default Moviecard;