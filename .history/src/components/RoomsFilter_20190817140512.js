import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";

export default function RoomsFilter() {
    return (        
        <div>
            Search Rooms
            {console.log(RoomContext)}
        </div>
    )
}
