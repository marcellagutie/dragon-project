import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DragonService } from "../../services/api";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Input, Button } from './edit.style';

const dragonService = new DragonService();

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const fetchDragonDetails = async () => {
    try {
      setLoading(true);

      if (!id) {
        toast.error("Id não encontrado!");
        return null;
      }

      const response = await dragonService.getDragonById(id);
      setName(response.data.name);
      setType(response.data.type);
      setCreatedAt(response.data.createdAt);

      setLoading(false);
    } catch (error) {
      toast.error("Dragão não encontrado");
    }
  };

  useEffect(() => {
    fetchDragonDetails();
  }, []);

  const handleEdit = async () => {
    try {
      setLoading(true);

      const data = {
        name,
        type,
        createdAt,
      };

      if (!id) {
        toast.error("Id não encontrado!");
        return null;
      }

      await dragonService.putDragon(id, data);

      toast.success("Dragão editado com sucesso");
      setLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error("Erro ao editar!");
      setLoading(false);
    }
  };

  const onBack = () => {
    navigate("/home");
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
      <h2>Editar dragão</h2>
      <div className="container">
        <label>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="text"
            name="type"
            placeholder="Tipo"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label>
          <Input
            type="date"
            name="createdAt"
            defaultValue={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <Button className="button-add" onClick={handleEdit}>
          Salvar
        </Button>
        <Button className="button-back" onClick={onBack}>
          Voltar
        </Button>
      </div>
    </>
  );
}
