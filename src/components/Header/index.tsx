import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth.contex";
import { Container, Text} from './header.style'
import { RxExit } from "react-icons/rx";

export const Header = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onExit = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Text>Sair</Text>
      <RxExit
        onClick={onExit}
      />
    </Container>
  );
}
