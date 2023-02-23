import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/context/auth.contex";
import { Input, Button, Container } from './login.style'

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    if (!user || !password) {
      return toast.error("Por favor, preencha todos os campos :)");
    }

    if (user === "test.login" && password === "123") {
      const data = {
        user,
        password,
      };

      login(data);
      setLoading(false);
      navigate("/home");
    } else {
      toast.error("Usuário ou senha incorreto. Preencha com atenção");
    }
  };

  return (
    <Container onSubmit={handleLogin}>
      <h2>Bem-vindx ao gerenciador de dragões</h2>
        <Input
          placeholder="Digite seu usuário"
          type="text"
          value={user}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
        />

        <Input
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          Acessar
        </Button>
    </Container>
  );
}
