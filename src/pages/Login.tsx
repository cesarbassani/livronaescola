import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Header } from '../components/Header';
import { signIn } from '../lib/auth/api';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signIn(email, password);
      // PublicRoute will handle redirection
    } catch (error) {
      console.error('Login error:', error);
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col items-center mb-8 space-y-6">
            <Logo />
            <h2 className="text-2xl font-semibold">Iniciar Sessão</h2>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />

            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                <span className="text-sm text-gray-600">Lembrar-me</span>
              </label>
              <Link to="/esqueci-senha" className="text-sm text-primary hover:underline">
                Esqueceu?
              </Link>
            </div>

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Entrando...' : 'Iniciar Sessão'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não possui uma conta?{' '}
            <Link to="/cadastro" className="text-primary hover:underline">
              Cadastre-se!
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}