import { supabase } from './supabase';

export interface School {
  id: string;
  name: string;
  created_at: string;
}

export async function getSchools() {
  const { data, error } = await supabase
    .from('schools')
    .select('*')
    .order('name');

  if (error) throw error;
  return data as School[];
}