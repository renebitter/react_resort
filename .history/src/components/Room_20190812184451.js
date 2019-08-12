import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/placeholder-img.jpeg'

export default function Room({ room }) {
    const {name, slug, images, price} = room;

    return (
        <article className="room">
           <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
           </div>
        </article>
    )
}
