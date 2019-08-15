import React, { Component } from 'react';
import defaultBcg from '../images/placeholder-img.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
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

        // if(!room){
        //     return(
        //         <div className="error">
        //             <h3>no such room could be found...</h3>
        //             <Link to="/rooms" className="btn-primary">
        //                 back to rooms
        //             </Link>
        //         </div>
        //     )
        // }

        return (
            <div>
                Hello from SingleRoom page {room.name}
                {/* {room.name} */}
                {/* {console.log(room)} */}
                {/* {room.name} */}
            </div>
        )
    }
}
