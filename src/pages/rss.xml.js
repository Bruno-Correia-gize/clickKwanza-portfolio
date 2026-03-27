import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  
  return rss({
    title: 'Bruno Correia - Notas Técnicas',
    description: 'Engenheiro de Software & Consultor de Eficiência Operacional em Angola. Especialista em Sistemas Escaláveis e Viabilidade Económica.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>pt-PT</language>`,
  });
}
