import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";

export default function RoomsFilter() {
    const context = useContext(RoomContext);
    console.log(RoomContext);



    return (        
        <div>
            Search Rooms            
        </div>
    )
}
