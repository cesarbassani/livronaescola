import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { AuthContext } from '../lib/auth/context';
import type { Profile } from '../lib/auth/types';
import { getProfile } from '../lib/auth/api';
import { supabase } from '../lib/supabase';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadUserAndProfile() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!mounted) return;

        if (session?.user) {
          setUser(session.user);
          const userProfile = await getProfile(session.user.id);
          if (mounted) {
            setProfile(userProfile);
          }
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadUserAndProfile();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        setUser(session?.user ?? null);
        
        if (session?.user) {
          const profile = await getProfile(session.user.id);
          if (mounted) {
            setProfile(profile);
          }
        } else {
          setProfile(null);
        }

        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}