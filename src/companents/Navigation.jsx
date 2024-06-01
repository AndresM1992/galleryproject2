import React from 'react';
import { Link } from 'react-router-dom';
import D2 from './D2';
import D1 from './D1';
import D3 from './D3';
import D4 from './D4';
import D5 from './D5';
import D6 from './D6';
import D7 from './D7';
import D8 from './D8';
import D9 from './D9';
import D10 from './D10';


const Navigation = () => {
  return (
    <div>
        <Link to="./D1" >
        <figure>
            <D1/>
            <figcaption>D1</figcaption>
        </figure>
        </Link>

        <Link to="./D2" >
        <figure>
            <D2/>
            <figcaption>D2</figcaption>
        </figure>
        </Link>

        <Link to="./D3" >
        <figure>
            <D3/>
            <figcaption>D3</figcaption>
        </figure>
        </Link>

        <Link to="./D4" >
        <figure>
            <D4/>
            <figcaption>D4</figcaption>
        </figure>
        </Link>

        <Link to="./D5" >
        <figure>
            <D5 />
            <figcaption>D5</figcaption>
        </figure>
        </Link>

        <Link to="./D6" >
        <figure>
            <D6 />
            <figcaption>D6</figcaption>
        </figure>
        </Link>

        <Link to="./D7" >
        <figure>
            <D7/>
            <figcaption>D7</figcaption>
        </figure>
        </Link>

        <Link to="./D8" >
        <figure>
            <D8/>
            <figcaption>D8</figcaption>
        </figure>
        </Link>

        <Link to="./D9" >
        <figure>
            <D9/>
            <figcaption>D9</figcaption>
        </figure>
        </Link>

        <Link to="./D10" >
        <figure>
            <D10/>
            <figcaption>D10</figcaption>
        </figure>
        </Link>
    </div>
  )
}

export default Navigation