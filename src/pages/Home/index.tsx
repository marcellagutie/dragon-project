import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Wrapper, Button } from './home.style'
import { GiSeaDragon } from "react-icons/gi";

export const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>
          Dragões <GiSeaDragon/>
        </h1>
        <Button to="/create">
          Cadastrar dragão
        </Button>
      </Wrapper>
      <Card />
    </>
  );
}