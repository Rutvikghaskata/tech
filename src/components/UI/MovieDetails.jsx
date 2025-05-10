import { useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { Actors, Poster, Title, Type, Year, Plot, BoxOffice, imdbID} = data;
    return( 
        <>
            <li className="hero-container">
                <div className="main-container-data">
                    <div className="poster-container">
                        <img src={Poster} className="poster" alt={imdbID} />
                        <button className="ticket__buy-btn">Watch now</button>
                    </div>
                </div>
                <div className="ticket-container-data">
                    <div className="ticket__content-data">
                        <h3 className="ticket__movie-title">Title :{Title}</h3>
                        <p style={{maxWidth: "600px"}}><h5>Details:</h5>{Plot}</p>
                        <p><h5>Actor:</h5>{Actors}</p>
                        <p><h5>Year:</h5>{Year}</p>
                        <p><h5>Type:</h5>{Type}</p>
                    </div>
                </div>
            </li>
        </>
    )
}