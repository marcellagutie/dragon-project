import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './utils/context/auth.contex';
import RoutesApp from './routes/route';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer
          autoClose={3000}
          theme="dark"
        />
        <RoutesApp />
      </AuthProvider>
    </div>
  );
}

export default App;
