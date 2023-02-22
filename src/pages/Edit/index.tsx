import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Input, Button, WrapperButton, Container } from './edit.style';

const Api = new api();

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const isAuthenticated = localStorage.getItem("isAuthenticated");


  const getDragonInfos = async () => {
    try {
      setLoading(true);

      if (!id) {
        toast.error("Não achei o identificador :(");
        return null;
      }

      const response = await Api.getDragonById(id);
      const formatedDate = new Date(response.data.createdAt).toISOString().split('T')[0]

      setDragon(response.data);
      setName(response.data.name);
      setType(response.data.type);
      setCreatedAt(formatedDate);
      setLoading(false);
    } catch (error) {
      toast.error("Poxa! Cadê o dragão que tava aqui?");
    }
  };

  useEffect(() => {
    getDragonInfos();
  }, []);

  const handleEdit = async () => {
    try {
      setLoading(true);

      if (!id) {
        toast.error("Não achei o identificador :(");
        return null;
      }

      const data = {
        name,
        type,
        createdAt,
      };

      await Api.putDragon(id, data);

      toast.success("UHUHU! Seu dragão foi editado.");
      setLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error("Ah não! Tive um erro ao editar");
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Editar dragão</h2>
        <Input
            type="text"
            name="name"
            placeholder="Nome"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Input
            type="text"
            name="type"
            placeholder="Tipo"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
        />
        <Input
            type="date"
            name="createdAt"
            defaultValue={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
        />
        <WrapperButton>
        <Button to={''} onClick={handleEdit}>
        Salvar
       </Button>
      <Button to={'/home'}>
        Voltar
      </Button>
        </WrapperButton>
      </Container>
    </>
  );
}
