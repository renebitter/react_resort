import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const {name, greeting} = this.context;

        return (
            <div>
                Featured Rooms {rooms[1]} {name}!
            </div>
        )
    }
}
