export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === "production" ? "/Chetan-Singh" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
