import { supabase } from '@/utils/supabaseClient';

export async function getData() {
  const { data, error } = await supabase.from('instruments').select('*');
  if (error) throw error;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
  // return data;
}

export default function DbPage() {
  return <div>{getData()}</div>;
}