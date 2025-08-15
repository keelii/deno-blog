import { join, warn } from "./deps.ts";

export const APP_PORT = Number(Deno.env.get("APP_PORT")) || 8000;
export const APP_ENV = Deno.env.get("APP_ENV") || "prd";
export const IS_PRD = APP_ENV === "prd";
export const POST_DIR = join(Deno.cwd(), Deno.env.get("POST_DIR") || "blog");
export const BLOG_URL = Deno.env.get("BLOG_URL") || "http://localhost";
export const BLOG_TITLE = Deno.env.get("BLOG_TITLE") || "My Blog"
export const BLOG_DESCRIPTION = Deno.env.get("BLOG_DESCRIPTION") || "Blog Description"
export const BLOG_AUTHOR = Deno.env.get("BLOG_AUTHOR") || "unnamed"
export const BLOG_KEYWORDS = Deno.env.get("BLOG_KEYWORDS") || "key1,key2,key3"
export const BLOG_RSS = Deno.env.get("BLOG_RSS") || "/atom.xml"

warn("CONFIG:" + JSON.stringify({
  APP_ENV,
  POST_DIR,
  BLOG_URL,
  BLOG_TITLE,
  BLOG_DESCRIPTION,
  BLOG_AUTHOR,
  BLOG_KEYWORDS,
  BLOG_RSS,
}))