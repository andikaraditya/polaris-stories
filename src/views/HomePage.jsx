import "./HomePage.css"
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
    return ( 
        <>
            <div id="HomePage">
                <h1>Polaris</h1>
                <p>by andikaraditya</p>
                <div 
                onClick={(e) => {
                    e.preventDefault()
                    navigate("/library")
                }}
                className="button pointer-hover">
                    Enter Library
                </div>
            </div>
        </>
    );
}

export default HomePage;