const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getImageSrc(relativePath: string) {
  return `${basePath}${relativePath}`;
}
