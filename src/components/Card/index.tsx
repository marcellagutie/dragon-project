import { useEffect, useState } from "react";
import { DragonService } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IDragon } from "../../utils/types/dragon.type";
import { Loading } from "../Loading";
import { Button, CardWrapper, Container, Describe, Links, Text, Title } from "./card.style";

const dragonService = new DragonService();

export const Card = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const fetchDragons = async () => {
    try {
      setLoading(true);

      const response = await dragonService.getDragon();

      setDragons(response.data);

      setLoading(false);
    } catch {
      toast.error("Erro ao retornar dragões");
    }
  };

  const deleteDragon = async (id: string) => {
    try {
      setLoading(true);

      await dragonService.deleteDragon(id);

      toast.success("Dragão deletado com sucesso!");
      fetchDragons();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Erro ao deletar dragão!");
    }
  };

  useEffect(() => {
    fetchDragons();
  }, []);

  if (!isAuthenticated) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
     <Container>
      {dragons.map((dragon) => {
        const imgUrl = `https://picsum.photos/301/301?random=${dragon.id}`
        return (

          <CardWrapper key={dragon.id.toString()}>
          <Link to={`/detail/${dragon.id}`} key={dragon.id.toString()}>
              <img src={imgUrl} alt="" width={'301px'} height={'301px'}/>
          </Link>
          <Describe>
              <Text>#{dragon.id}</Text>
              <Title>{dragon.name} | {dragon.type} </Title>
              <Links>
                <Button to={`/detail/${dragon.id}`}>
                  Detalhes
                </Button>
                <Button to={`/edit/${dragon.id}`}>
                  Editar
                </Button>
                <Button to={''} onClick={() => deleteDragon(dragon.id)}>
                  Excluir
                </Button>
              </Links>
          </Describe>
          </CardWrapper>

        )

      })}
    </Container>
  );
}
