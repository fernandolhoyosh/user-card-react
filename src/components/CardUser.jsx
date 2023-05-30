import './CardUser.css'
import { FcBusinessman } from "react-icons/fc";

function CardUser (){
    return(
        <div className="target-card">
            <h5>Sergio</h5>
            <picture><FcBusinessman/></picture>
            <p>Foto de perfil</p>
            <p>23</p>
            <button>Take a car</button>
        </div>
    )
}

export {CardUser}