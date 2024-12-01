import { User } from '@supabase/supabase-js';
import type { Database } from '../database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'] & {
  schools?: {
    name: string;
  };
};

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
}