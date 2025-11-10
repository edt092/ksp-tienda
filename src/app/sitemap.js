import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';

export default function sitemap() {
  const baseUrl = 'https://kspromocionales.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Category pages
  const categoryPages = categoriesData.map((category) => ({
    url: `${baseUrl}/categorias/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Product pages
  const productPages = productsData.map((product) => ({
    url: `${baseUrl}/productos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
