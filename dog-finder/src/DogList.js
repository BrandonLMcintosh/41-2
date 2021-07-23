import React from "react";
import { NavLink } from "react-router-dom";


const DogList = ({dogs}) => {
    return (
        <div>
            <ul>
                {dogs.map((dog) => (
                        <li>
                            <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default DogList;