import "./CardUser.css";
import { FcBusinessman } from "react-icons/fc";

function CardUser() {
  return (
    <div className="target-card">
      <h4>Sergio</h4>
      <picture className="background-photo">
        <FcBusinessman id="photo-user" />
      </picture>
      <p>Foto de perfil</p>
      <p>23</p>
      <button>Take a car</button>
    </div>
  );
}

export { CardUser };
