import React from "react";
import './Main.scss';
import {useNavigate} from 'react-router-dom';

function Main()
{
    let navigate=useNavigate()
    function OpenHome() {
        let path = `/Home`;
        navigate(path);
    }
    return(
        <div>
          <nav className="layer">
	<ul>
        <div>
            <li>
                <button type="button" class="btn btn-info " onClick={OpenHome} style={{padding:"10px",margin:"10px"}}>Home</button>
            </li>

            <li>
                <button type="button" class="btn btn-info" onClick={OpenHome} style={{padding:"10px",margin:"10px"}}>About Us</button>
            </li>

            <li>
                <button type="button" class="btn btn-info" onClick={OpenHome} style={{padding:"10px",margin:"10px"}}>Contact-Us</button>
            </li>
{/* 
            <li>
                <button type="button" class="btn btn-info" onClick={OpenHome} style={{padding:"10px",margin:"10px"}}>Contact Us</button>
            </li>

            <li>
                <button type="button" class="btn btn-info" onClick={OpenHome} style={{padding:"10px",margin:"10px"}}>Contact Us</button>
            </li> */}
        </div>
	</ul>
</nav>

<section className="home page layer" style={{color:"black",fontWeight:"bold"}}>
	<h1>Beauty Care <br/>Parlour</h1>
</section>
        </div>
    )
}

export default Main;