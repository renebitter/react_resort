import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {loading, featuredRooms : rooms} = this.context;
        return (
            <>
            <div>
                Featured Rooms!
            </div>
            <Room />
            <Title />
            <Loading />
            </>
        )
    }
}
