import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Input, Button, Container, WrapperButton } from './create.style'

const Api = new api();

export const Create = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const validateFields = () => {
    if (!name || !type) {
      toast.error("Por favor, preencha todos os campos :)");
      return false;
    }
    return true;
  };

  const handleCreate = async () => {
    try {
      setLoading(true);

      const data = {
        name,
        type,
        createdAt,
      };

      if (!validateFields()) {
        setLoading(false);
        return;
      }

      await Api.postDragon(data);

      toast.success("Uhuhu! Seu dragão foi cadastrado.");
      setLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error("Houve um erro :(");
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
        <h2>Cadastrar dragão</h2>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Tipo"
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          type="date"
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <WrapperButton>
        <Button to={''} onClick={handleCreate}>
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
