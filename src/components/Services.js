import React, { Component } from 'react';
import { FaTools,FaExchangeAlt, FaMoneyCheckAlt,FaCarCrash} from "react-icons/fa";
import Title from './Title';




export default class Services extends Component {

    state = {
        services: [
            {
                icon:<FaTools/>,
                title: 'Service Plans',
                info:'Our range of Service Plans* help you keep your car in the best possible condition and covers your car for its next two scheduled services. '
        
            },
            {
                icon:<FaExchangeAlt/>,
                title: 'EXCHANGE',
                info:'Contactless Experience for Sales and Service,From the moment you walk through our doors to when you step out again, you can count on the highest degree of customer service and accommodation. '
        
            },
            {
                icon:<FaMoneyCheckAlt/>,
                title: '0% Finance offer*',
                info:'Spread the cost. At no extra cost.You can now pay for routine maintenance and repairs on your car in convenient interest-free instalments.'
        
            },
            {
                icon:<FaCarCrash/>,
                title: 'Car Insurance Plans',
                info:'Specifically designed to take care of you and your Car. '
        
            },
        ]
    };

     

  render() {
    return (
      <section className="services"> 
          <Title title="services"/>
          <div className="services-center" >
              {this.state.services.map((service, index) => {
                  return (
                      <article key={index} className="service">
                          <span>{service.icon}</span>
                          <h6>{service.title}</h6>
                          <p>{service.info}</p>
                          
                      </article>

                  );
              })}
              
           </div>
      </section>
    )
  }
}


