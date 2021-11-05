import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl === undefined) {
  throw new Error("Supabase URL not specified.");
}

if (supabaseAnonKey === undefined) {
  throw new Error("Supabase anonymous key not specified.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Post = {
  id: number;
  name: string;
  hits: number;
};

export async function getHitsBySlug(slug: string) {
  const { data: post } = await supabase
    .from<Post>("posts")
    .select("hits")
    .like("name", slug)
    .single();

  if (post === null) throw new Error("Unable to find entry by slug.");

  return post.hits;
}

export async function addHitToSlug(slug: string) {
  if (process.env.NODE_ENV === "production") {
    await supabase.rpc("increment", { slug });
  }

  return undefined;
}

export default supabase;
