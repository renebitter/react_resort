import React, { Component } from 'react';
import {FaCocktail, FaHikiing, FaShuttleVan, FaBeer} from 'react-icons';
import Title from './Title';


export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaHikiing />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaShuttleVan />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaBeer />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ]
    }

    render() {
        return (
            <div>
                <Title title="services" />
            </div>
        )
    }
}
