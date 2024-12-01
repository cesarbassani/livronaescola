import { BookOpen } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <BookOpen className="w-10 h-10 text-primary" />
      <div className="flex flex-col">
        <strong className="text-xl font-bold">Livro Na Escola</strong>
        <span className="text-sm text-gray-500">Acervo digital</span>
      </div>
    </div>
  );
}