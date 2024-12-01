import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { SearchBar } from '../components/SearchBar';
import { AlphabetFilter } from '../components/AlphabetFilter';
import { Button } from '../components/Button';
import { UserHeader } from '../components/UserHeader';

export function Home() {
  const [catalogQuery, setCatalogQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string>();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar with responsive visibility */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content area that grows to fill available space */}
      <main className="flex-1 p-4 md:p-8 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header with user info and school */}
          <UserHeader />

          {/* Main search section */}
          <section className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg md:text-xl font-semibold">Buscar títulos</h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <select className="border rounded-lg px-3 py-1.5 bg-white">
                  <option>Título</option>
                  <option>Autor</option>
                  <option>Assunto</option>
                  <option>ISBN</option>
                  <option>Categoria</option>
                </select>
                <Button variant="outline" className="whitespace-nowrap">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Catalog search */}
            <div className="mb-6">
              <SearchBar
                value={catalogQuery}
                onChange={setCatalogQuery}
                placeholder="Procurar no catálogo..."
              />
            </div>

            {/* Alphabet filter with horizontal scroll on mobile */}
            <div className="overflow-x-auto pb-2 mb-6">
              <div className="min-w-max">
                <AlphabetFilter
                  onLetterClick={setActiveLetter}
                  activeLetter={activeLetter}
                />
              </div>
            </div>

            {/* Book grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                >
                  <div className="w-32 h-48 bg-gray-200 rounded-md mb-4"></div>
                  <h3 className="text-sm font-medium text-gray-800">Harry Potter</h3>
                  <p className="text-xs text-gray-500">J.K. Rowling</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}