import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Blog GoDev - Tips Otomasi Bisnis untuk UMKM Indonesia',
    description:
      'Artikel, tutorial, dan tips praktis tentang otomasi bisnis untuk UMKM. Belajar cara efisienkan operasional usaha Anda.',
    site: context.site?.toString() || 'https://godev.biz.id',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}`,
      pubDate: post.data.pubDate,
      categories: [post.data.category],
    })),
    customData: `<language>id-ID</language>`,
  });
}
