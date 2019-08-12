import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {FeaturedRooms} = this.context;

        return (
            <div>
                Featured Rooms!
            </div>
        )
    }
}
