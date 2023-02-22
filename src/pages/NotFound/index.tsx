import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/home">Clique aqui e veja todos os Dragões</Link>
    </div>
  );
}
