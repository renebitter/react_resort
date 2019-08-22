import React, { Component } from "react";
// import items from './data';
import Client from "./contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
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
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "fields.price"
        // order: "sys.createdAt"
      });

      console.log(response.includes.Assets);

      let rooms = this.formatData(response.items);
      // let rooms2 = this.formatData2(response.includes);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let minPrice = Math.min(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      // console.log(rooms);

      this.setState({
        rooms,
        // rooms2,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        minPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // formatData2(includes) {
  //   let tempItems2 = includes.map(item => {
  //     // let id = item.sys.id;
  //     // let images = item.fields.images.map(image => image.fields.file.url);
  //     let imgAsset = item.includes.Asset.fields.file.map(
  //       imgAsset => imgAsset.fields.file.url
  //     );

  //     console.log(imgAsset);
  //     // let room = { ...item.fields, images, id };
  //     return imgAsset;
  //   });
  //   return tempItems2;
  // }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    //.filter returns array | .find returns an object
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    //because of checkbox:
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    //[name] for whatever you get back, sets its value
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );

    // const type = event.target.type;
    // const name = event.target.name;
    // const value = event.target.value;
    // console.log(type, name, value);
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    //All rooms
    let tempRooms = [...rooms];

    //Transform value
    capacity = parseInt(capacity);

    //Filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    //Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    //Filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //Filter by Size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    //Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    //Change state
    this.setState({
      sortedRooms: tempRooms
    });
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
}

const RoomConsumer = RoomContext.Consumer;

//Higher order component
//Replace HPC's by HOOKS??
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
