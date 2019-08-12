import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {loading, featuredRooms : rooms} = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        
        return (
            <>
            <section className="featured-rooms">
                Featured Rooms!
            </section>
            
            <Title title="featured rooms"/>
            <Loading />
            </>
        )
    }
}
