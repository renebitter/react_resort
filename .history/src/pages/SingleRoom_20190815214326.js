import React, { Component } from 'react';
import defaultImg from '../images/placeholder-img.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        
        this.state={
            slug:this.props.match.params.slug,
            defaultImg
        }
        // console.log(this.props);
    }

    static contextType = RoomContext;

    // componentDidMount(){

    // }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        // console.log(this.props);
        console.log(room);

        if(!room){
            return(
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            )
        }

        const {name, 
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [mainImg, ...allImages] = images;

        return (
            <>            
            {/* <StyledHero img={images[0]}> */}
            {/* Using just main image */}
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                        {/* {images.map((item, index) => { */}
                        {allImages.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>Size : ${size} SQF</h6>
                        <h6>max capacity : {
                                capacity > 1 ?  `${capacity} people` : 
                                                `${capacity} person`}
                        </h6>
                        
                    </article>
                </div>
            </section>
            </>
        )
    }
}
