import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {featuredRooms : rooms} = this.context;
        console.log(room);
        return (
            <div>
                Featured Rooms!
            </div>
        )
    }
}
