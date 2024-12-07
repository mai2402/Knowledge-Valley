
 import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// export default supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseUrl = "https://enpnwldzmtnuhuznkxoa.supabase.co"
export const supabaseAnonKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVucG53bGR6bXRudWh1em5reG9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTY5NzQsImV4cCI6MjA0ODg5Mjk3NH0.2DfI5-ew3MXuZrIgGQ3sEg7O1eAD7cYBAaZzq72TJLQ"



const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;