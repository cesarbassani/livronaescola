-- Create schools table
create table public.schools (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table schools enable row level security;

-- Create policies
create policy "Schools are viewable by all users"
  on schools for select
  using (true);

-- Insert some initial schools
insert into public.schools (name) values
  ('Escola Municipal João da Silva'),
  ('Colégio Estadual Maria Santos'),
  ('Instituto Federal de Educação');