import React from 'react';
import Room from "./Room";

export default function RoomsList({rooms}) {
    console.log( rooms );
    if(RoomsList.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms with these search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
    );
}