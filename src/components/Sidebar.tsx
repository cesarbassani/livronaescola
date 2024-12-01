import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookMarked, BookOpen, Settings, FileText, User } from 'lucide-react';
import { Logo } from './Logo';

interface SidebarLinkProps {
  to: string;
  icon: typeof Home;
  children: React.ReactNode;
}

function SidebarLink({ to, icon: Icon, children }: SidebarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`
        flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'bg-primary/10 text-primary' 
          : 'text-gray-600 hover:bg-gray-100'
        }
      `}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="whitespace-nowrap">{children}</span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r p-6 flex flex-col overflow-y-auto">
      <div className="flex items-center gap-2 mb-8 flex-shrink-0">
        <Logo />
      </div>

      <nav className="space-y-2 flex-1">
        <SidebarLink to="/home" icon={Home}>Home</SidebarLink>
        <SidebarLink to="/cadastros" icon={Users}>Cadastros</SidebarLink>
        <SidebarLink to="/acervos" icon={BookMarked}>Acervos</SidebarLink>
        <SidebarLink to="/emprestimos" icon={BookOpen}>Empréstimos</SidebarLink>
        <SidebarLink to="/configuracoes" icon={Settings}>Configurações</SidebarLink>
        <SidebarLink to="/relatorios" icon={FileText}>Relatórios</SidebarLink>
        <SidebarLink to="/perfil" icon={User}>Perfil</SidebarLink>
      </nav>
    </aside>
  );
}