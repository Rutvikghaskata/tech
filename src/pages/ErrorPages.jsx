import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    const nevigate = useNavigate();

    const handleGoBack = () => {
        nevigate(-1);
    }

    if(error.status === 404){
        return (
            <section className="error-section"  style={{display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", margin: "50px"}}>
                <div id="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            . The page you were looking for could not be found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                    <buttonn className="btn" style={{margin: "30px"}}onClick={handleGoBack}>Go Back</buttonn>
                </div>
            </section>
        )
    }
    console.log(error);
    return <h1>The page is you are looking does not exist !</h1>
}