import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  proccess.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
