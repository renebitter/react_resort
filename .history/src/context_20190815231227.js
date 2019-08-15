import React, { Component } from 'react'
//items = contentful
import items from './data';


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        //TODO:
        loading: true
    };    

    // getData

    componentDidMount() {
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms:rooms, 
            //TODO:
            loading: false
        })
    }

    formatData(array){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;            
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        //.filter returns array | .find returns an object
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    render() {
        return (
            <RoomContext.Provider 
            value={{
                ...this.state,
                getRoom: this.getRoom
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

//Higher order component
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} /> }
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };