import { createServerFn } from "@tanstack/react-start";
import { supabase } from "./supabase";

export const getSiteContent = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { data, error } = await supabase.from("cms_content").select("*");
    if (error || !data) {
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
});
