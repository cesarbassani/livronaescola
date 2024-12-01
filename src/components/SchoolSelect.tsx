import { useEffect, useState } from 'react';
import { School, getSchools } from '../lib/schools';
import { Select } from './Select';

interface SchoolSelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function SchoolSelect({ value, onChange, required }: SchoolSelectProps) {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSchools()
      .then(setSchools)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Select label="Instituição" disabled value="" />;
  if (error) return <div className="text-red-500">Erro ao carregar instituições</div>;

  return (
    <Select
      label="Instituição"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      <option value="">Selecione a instituição</option>
      {schools.map((school) => (
        <option key={school.id} value={school.id}>
          {school.name}
        </option>
      ))}
    </Select>
  );
}