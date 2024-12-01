import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Link to="/contato" className="text-gray-600 hover:text-gray-900">
            Contate-nos
          </Link>
          <Link to="/login">
            <Button variant="outline">Iniciar Sessão</Button>
          </Link>
          <Link to="/cadastro">
            <Button>Cadastrar-se</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}