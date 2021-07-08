import React,{useState} from 'react';
import './styles/skill.css';



function Skill() {

    // States
    const [currTab, setTab] = useState(1);

    const lang = (
        <h1>Languages</h1>

    )
    const setlang = () =>{setTab(1);}
    const libs = (
        <h1>Framework & Libraries</h1>
        
    )
    const setlibs = () =>{setTab(2);}
    const cert = (
        <h1>Certifications</h1>
        
    )
    const setcert = () =>{setTab(3);}
    const exp = (
        <h1>Work Experience</h1>
        
    )
    const setexp = () =>{setTab(4);}
    const swot = (
        <h1>SWOT Analysis</h1>
        
    )
    const setswot = () =>{setTab(5);}
    return (
        <div className="Skill">
            <div className="side-menu">
                <ul>
                    <li><button onClick={setlang} className="tabs">Languages</button></li>
                    <li><button onClick={setlibs} className="tabs">Framework & Libraries</button></li>
                    <li><button onClick={setcert} className="tabs">Certifications</button></li>
                    <li><button onClick={setexp} className="tabs">Experience</button></li>
                    <li><button onClick={setswot} className="tabs">SWOT</button></li>
                </ul>
            </div>
            <div className="dialog-box">
                {(currTab===1)?lang:(currTab===2)?libs:(currTab===3)?cert:(currTab===4)?exp:(currTab===5)?swot:lang}
                
            </div>
            
        </div>
    )
}

export default Skill
