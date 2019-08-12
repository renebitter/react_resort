import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from '../components/Loading'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {featuredRooms : rooms} = this.context;
        return (
            <div>
                Featured Rooms!
            </div>
        )
    }
}
