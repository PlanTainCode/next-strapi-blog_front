const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://plantain-blog.ru"
  : "http://localhost:1337";