import React, { Component } from 'react';
import { FaCocktail, FaHikiing, FaShuttleVan } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaHikiing />,
                title: "hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaShuttleVan />,
                title: "free transport",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                icon: <FaBeer />,
                title: "get wasted",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map()}
                </div>
            </section>
        )
    }
}
