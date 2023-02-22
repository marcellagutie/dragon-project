import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth.contex";
import { Container, Text, Title, Create, Exit, Menu } from './header.style'
import { RxExit } from "react-icons/rx";
import { GiSeaDragon } from "react-icons/gi";

export const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onExit = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <Title>
        Dragões
        <GiSeaDragon color={'#3FA110'}/>
      </Title>
        <Menu>
          <Create to="/create">
            Cadastrar dragão
          </Create>
          <Exit
          onClick={onExit}>
            <Text>Sair</Text>
            <RxExit color={'#fff'} />
          </Exit>
        </Menu>
    </Container>
  );
}
