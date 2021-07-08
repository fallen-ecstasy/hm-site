import React from 'react';
import './styles/footer.css';
import name from './media/sign2.png'

function Footer() {
    return (
        <div className="Footer">
           <h4>Thank You for Visiting! 🙏</h4>

           <p>Designed & Created By</p>
           <img src={name} className="name-block" />
        </div>
    )
}

export default Footer
