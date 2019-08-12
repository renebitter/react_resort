import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {};

    render() {
        return (
            <RoomProvider.Provider value="Hello">
                {this.props.children}
            </RoomProvider.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };