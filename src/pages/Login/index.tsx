import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/context/auth.contex";
import { Input, Button } from './login.style'

export const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    try {
      if (!email || !password) {
        toast.error("Por favor, preencha todos os campos");
        return;
      }

      if (email === "test.login" && password === "123") {
        const data = {
          email: email,
          password: password,
        };

        signIn(data);
        navigate("/home");
        return;
      } else {
        toast.error("Usuário ou senha incorreto");
      }
    } catch (error) {
      toast.error("Usuário ou senha incorreto");
      setLoading(false);
    }
  };

  return (
    <div className="container-center">
      <div className="login">
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
}
