import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
    return (
        <div>
           <Card style={{ width: "19rem" }} className=" mx-4 my-3">
            <Card.Img variant="top" src={movie.posterUrl} style={{ height: "350px", width:"250px" }} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                <ReactStars
                    count={5}
                    isHalf={true}
                    value={movie.rate}
                    size={24}
                    activeColor="#ffd700"
                />
                </Card.Text>
                <Button variant="primary">Description</Button>
            </Card.Body>
            </Card>  
        </div>
    )
}

export default MovieCard
