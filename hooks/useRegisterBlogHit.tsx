import { useEffect } from "react";
import { addHitToSlug } from "lib/supabase";

function useRegisterBlogHit(slug: string) {
  useEffect(() => {
    addHitToSlug(slug);
  }, []);
}

export default useRegisterBlogHit;
