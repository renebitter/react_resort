import React from 'react';
import Room from "./Room";

export default function RoomsList() {
    if(RoomsList.lenght === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms with these search parameters</h3>
            </div>
        )
    }

    return (
        <div>
            Rooms List
        </div>
    )
}
