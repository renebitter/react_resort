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
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };    

    // getData

    componentDidMount() {
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let minPrice = Math.min(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms:rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            minPrice,
            maxSize
        })
    };

    formatData(array){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;            
        });
        return tempItems;
    };

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        //.filter returns array | .find returns an object
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = event => {
        //because of checkbox:
        const target = event.target;
        const value = event.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;

        //[name] for whatever you get back, sets its value
        this.setState({
            [name]: value
        }, 
        this.filterRooms
        );

        // const type = event.target.type;
        // const name = event.target.name;
        // const value = event.target.value;
        // console.log(type, name, value);
    };
    
    filterRooms = ( ) => {
        let {
            rooms, 
            type, 
            capacity,           
            price,
            minSize,
            maxSize
        } = this.state;

        //All rooms
        let tempRooms = [...rooms];

        //Transform value
        capacity = parseInt(capacity);

        //Filter by type
        if(type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //Filter by capacity
        if (capacity !== 1) {
          tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        this.setState({
            sortedRooms:tempRooms
        })
    };

    render() {
        return (
          <RoomContext.Provider
            value={{
              ...this.state,
              getRoom: this.getRoom,
              handleChange: this.handleChange
            }}
          >
            {this.props.children}
          </RoomContext.Provider>
        );
    }
};

const RoomConsumer = RoomContext.Consumer;

//Higher order component
//Replace HPC's by HOOKS??
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} /> }
        </RoomConsumer>
    }
};

export { RoomProvider, RoomConsumer, RoomContext };