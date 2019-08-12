import React, { Component } from 'react'

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {

    }

    render() {
        return (
            <RoomProvider.Provider value={"Hello"} />
        )
    }
}
