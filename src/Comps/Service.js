import React from 'react';
import '../styles/card.css';
import {InlineIcon} from '@iconify/react';

function ServiceCard(prop) {
    if(prop.view==="Mobile"){
        return (
            <div className="card-m">
                <InlineIcon icon={prop.icon} className="card-icon-m" />
                <h5>{prop.head}</h5>
                </div>
        )
    }else{return (
        <div className="card">
            <InlineIcon icon={prop.icon} className="card-icon" />
            <h5>{prop.head}</h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
    )
    }
}

export default ServiceCard
