import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SchoolSelect } from '../components/SchoolSelect';
import { Header } from '../components/Header';
import { signUp } from '../lib/auth';

export function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signUp(email, password, {
        first_name: firstName,
        last_name: lastName,
        school_id: school,
      });
      
      // Since email confirmation is disabled, redirect directly to login
      navigate('/login', { 
        state: { 
          message: 'Cadastro realizado com sucesso! Você já pode fazer login.' 
        } 
      });
    } catch (error) {
      console.error('Registration error:', error);
      setError(error instanceof Error ? error.message : 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-4xl text-center mb-16">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Cadastre-se na Livro na Escola
          </h1>
          <p className="text-xl text-gray-400">
            O catálogo da sua biblioteca está disponível em qualquer lugar, a qualquer hora.
          </p>
        </div>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-10">
          <h2 className="text-xl font-semibold mb-8">Informações da conta:</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nome"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={loading}
              />
              <Input
                label="Sobrenome"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <Input
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />

            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            <SchoolSelect
              value={school}
              onChange={setSchool}
              required
              disabled={loading}
            />

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Cadastrando...' : 'Iniciar minha Biblioteca'}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}