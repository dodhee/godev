import type { ImageMetadata } from 'astro';

/** Eager map of blog images under src/images/blog/ */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/blog/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

const byBasename = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const base = path.split('/').pop();
  if (base && mod?.default) byBasename.set(base, mod.default);
}

/** Resolve frontmatter image path (any folder prefix) to Astro ImageMetadata by basename. */
export function resolveBlogImage(imagePath?: string): ImageMetadata | undefined {
  if (!imagePath) return undefined;
  const base = imagePath.split('/').pop();
  if (!base) return undefined;
  return byBasename.get(base);
}

export function blogImagePublicUrl(imagePath?: string, site = 'https://godev.biz.id'): string | undefined {
  if (!imagePath) return undefined;
  if (imagePath.startsWith('http')) return imagePath;
  const base = imagePath.split('/').pop();
  // Decap public_folder is /images — live assets also built via Image from src/images/blog
  return base ? `${site}/images/${base}` : undefined;
}
