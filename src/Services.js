import React from 'react';
import ServiceCard from './Comps/Service';
import './styles/services.css';
import designIdeas16Regular from '@iconify-icons/fluent/design-ideas-16-regular';
import code20Filled from '@iconify-icons/fluent/code-20-filled';
import phone20Regular from '@iconify-icons/fluent/phone-20-regular';
import topSpeed20Regular from '@iconify-icons/fluent/top-speed-20-regular';
import rocket20Regular from '@iconify-icons/fluent/rocket-20-regular';
import chatHelp20Regular from '@iconify-icons/fluent/chat-help-20-regular';


function Services(prop) {
    if(prop.view==="Mobile"){
        return(
            <div className="Services-mobile">
            <div className="Heading-mobile">
                <h1>02.</h1><h2>Services</h2><hr />
            </div>
            <div className="Card-grid">
            <ServiceCard view="Mobile" head="Web Designing" icon={designIdeas16Regular} />
            <ServiceCard view="Mobile" head="Web Development" icon={code20Filled} />
            <ServiceCard view="Mobile" head="Mobile Development" icon={phone20Regular} />
            <ServiceCard view="Mobile" head="Optimized Performance" icon={topSpeed20Regular} />
            <ServiceCard view="Mobile" head="Deployment" icon={rocket20Regular} />
            <ServiceCard view="Mobile" head="Tech Support" icon={chatHelp20Regular} />
            </div>
        </div>
        )
    }else{
    return (
        <div className="Services">
            <div className="Heading">
                <h1>02.</h1><h2>Services</h2><hr />
            </div>
            <div className="Card-grid">
            <ServiceCard head="Web Designing" icon={designIdeas16Regular} />
            <ServiceCard head="Web Development" icon={code20Filled} />
            <ServiceCard head="Mobile Development" icon={phone20Regular} />
            <ServiceCard head="Optimized Performance" icon={topSpeed20Regular} />
            <ServiceCard head="Deployment" icon={rocket20Regular} />
            <ServiceCard head="Tech Support" icon={chatHelp20Regular} />
            </div>
        </div>
    )
    }
}

export default Services
