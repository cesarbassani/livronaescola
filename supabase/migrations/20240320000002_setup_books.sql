-- Create books table
create table public.books (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  author text not null,
  isbn text,
  category text,
  school_id uuid references public.schools(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table books enable row level security;

-- Create policies
create policy "Users can view books from their school"
  on books for select
  using (
    school_id in (
      select school_id from profiles
      where id = auth.uid()
    )
  );

create policy "Users can insert books into their school"
  on books for insert
  with check (
    school_id in (
      select school_id from profiles
      where id = auth.uid()
    )
  );

create policy "Users can update books from their school"
  on books for update
  using (
    school_id in (
      select school_id from profiles
      where id = auth.uid()
    )
  )
  with check (
    school_id in (
      select school_id from profiles
      where id = auth.uid()
    )
  );