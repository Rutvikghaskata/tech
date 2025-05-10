
export const Card = ({curMovie}) => {
    return(
        <>
            <li className="hero-container">
                <div className="main-container">
                    <img src={curMovie.Poster} className="poster" alt={curMovie.imdbID} />
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <button className="ticket__buy-btn">Watch now</button>
                    </div>
                </div>
            </li>
        </>
    )
}