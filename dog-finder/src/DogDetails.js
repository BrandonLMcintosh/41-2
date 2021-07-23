import React from "react";
import { useParams } from "react-router";

const DogDetails = ({getDog}) => {
    const {name} = useParams();
    const dog = getDog(name);
    return (
        <div>
            <img src={dog.src} alt={dog.name}></img>
            <h3>{dog.name}</h3>
            <h4>age: {dog.age}</h4>
            <p>Facts: </p>
            <ul>
                {dog.facts.map((fact) => <li>{fact}</li>)}
            </ul>

        </div>
    )
}

export default DogDetails;