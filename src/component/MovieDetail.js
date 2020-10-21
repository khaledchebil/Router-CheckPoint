import React, {useState, useEffect} from 'react'
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css';
import {movies} from '../movies'

const MovieDetail = ({match}) => {

    const [move, setMove] = useState({})

    useEffect (()=> {
        setMove(movies.find((move) => move.id === +match.params.id))
    }, []);

   
    
    
    return (
        <div className='tc'>
            <div>
                <h1>{move.name}</h1>
                <iframe width="560" height="315" src={move.video} frameborder="0" allow=" autoplay" title={move.name} ></iframe> <br/>
                {move.description}
                </div>

            <Link to='/app'>
            <Button variant="success">Go Back</Button>
            </Link>
        </div>
    )
}

export default MovieDetail
