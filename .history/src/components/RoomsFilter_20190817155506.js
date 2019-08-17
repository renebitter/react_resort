import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values (Set adds value only if value is not in the array already)
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    // react hooks
    const context = useContext(RoomContext);    
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;

    //this gets all types repeating each type:
    // let types = rooms.map(item => item['type']);
    // get unique types
    let types = getUnique(rooms, 'type');
    //add "all" to types
    types = ['all', ...types];
    // //map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )        
    });

    let people = getUnique(rooms, "capacity");

    people = people.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* Select Type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              className="form-control"
              name="type"
              id="type"
              value={type}
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* End of select type */}
          {/* Guests */}
          <div className="form-group">
            <label htmlFor="type">guests</label>
            <select
              className="form-control"
              name="capacity"
              id="capacity"
              value={capacity}
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* End of Guests */}
          {/* Room Price */}
          <div className="form-group">
              <label htmlFor="price">
                  room price ${price}
              </label>
              <input type="range"/>
          </div>
          {/* End of Room Price */}
        </form>
      </section>
    );
    
}
