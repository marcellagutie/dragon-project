import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth.contex";

export const Header = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onExit = () => {
    signOut();
    navigate("/");
  };

  return (
    <header>
      <Link className="logo" to="/home">
        <img src={''} width={190} height={140} />
      </Link>
      <Link className="button" to="/register">
        Cadastrar dragão
      </Link>
      <input
        type="image"
        src={''}
        title="Sair"
        alt="Submit"
        className="button-exit"
        onClick={onExit}
      />
    </header>
  );
}
