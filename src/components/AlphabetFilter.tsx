interface AlphabetFilterProps {
  onLetterClick: (letter: string) => void;
  activeLetter?: string;
}

export function AlphabetFilter({ onLetterClick, activeLetter }: AlphabetFilterProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          className={`
            w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded transition-colors
            ${activeLetter === letter 
              ? 'bg-primary text-white' 
              : 'hover:bg-gray-100'
            }
          `}
        >
          {letter}
        </button>
      ))}
      <button 
        onClick={() => onLetterClick('all')}
        className={`
          ml-2 text-primary hover:underline whitespace-nowrap
          ${activeLetter === 'all' ? 'font-bold' : ''}
        `}
      >
        TODOS
      </button>
    </div>
  );
}