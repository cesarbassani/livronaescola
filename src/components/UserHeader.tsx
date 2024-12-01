import { LogOut } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { Button } from './Button';

export function UserHeader() {
  const { profile, signOut } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6 md:mb-8">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Olá, {profile?.first_name}
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Bem-vindo ao Sistema para Controle de Acervo Literário
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{profile?.schools?.name}</span>
        <Button variant="outline" onClick={signOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </Button>
      </div>
    </div>
  );
}