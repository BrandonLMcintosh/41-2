import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/dogs">Look at dogs</Link>
        </div>
    )
}

export default Home;