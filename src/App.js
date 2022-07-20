import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import Foo from './components/Test/Foo';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './components/Providers/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
