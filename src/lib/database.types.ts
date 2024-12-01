export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
          school_id: string
          created_at: string
        }
        Insert: {
          id: string
          first_name: string
          last_name: string
          school_id: string
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          school_id?: string
          created_at?: string
        }
      }
      schools: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      books: {
        Row: {
          id: string
          title: string
          author: string
          isbn: string
          category: string
          school_id: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          author: string
          isbn: string
          category: string
          school_id: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          author?: string
          isbn?: string
          category?: string
          school_id?: string
          created_at?: string
        }
      }
    }
  }
}