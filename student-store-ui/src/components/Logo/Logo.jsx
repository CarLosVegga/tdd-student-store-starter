import {Link} from 'react-router-dom'
import imgStore from "../../img/store.png"
import "./Logo.css"

export default function Logo(){
    return (
        <div className="logo">
            <Link to="/">
                <img src={imgStore} alt="Logo" />    
            </Link>        
        </div>
    )
}