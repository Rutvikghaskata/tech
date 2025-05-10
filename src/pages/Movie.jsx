import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";
import "../components/UI/Card.css"
export const Movie = () => {
    const moviesData = useLoaderData();
    // console.log(moviesData);

    return (
        <>
            <ul className="container">
                {moviesData && moviesData.Search && moviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />;
                })}
            </ul>
        </>
    )
}