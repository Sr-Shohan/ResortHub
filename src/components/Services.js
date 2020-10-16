import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
             {
                 icon:<FaCocktail/>,
                 title: "Free Juice",
                 info: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. "

             },
             {
                icon:<FaHiking/>,
                title: "Free Juice",
                info: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. "

            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Juice",
                info: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. "

            },
            {
                icon:<FaBeer/>,
                title: "Free Juice",
                info: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. "

            }
        ]
    }
    render() {
        return (
            <section className="services">

                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                   return (
                    <article key={index} className="service">
                    <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                    </article>
                   );
                   
                   })}


                </div>
                
            </section>
        );
    }
}
