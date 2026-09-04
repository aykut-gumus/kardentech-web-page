import { MetadataRoute } from 'next';
import { routeMap } from '@/i18n/routes';
import { projects } from '@/data/projects';

export const dynamic = 'force-static';

const siteUrl = 'https://www.kardentech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  const pageIds = Object.keys(routeMap);
  const locales = ['tr', 'en', 'ru'] as const;

  for (const pageId of pageIds) {
    for (const locale of locales) {
      const path = routeMap[pageId]?.[locale];
      if (path && typeof path === 'string') {
        routes.push({
          url: `${siteUrl}${path}`,
        });
      }
    }
  }

  // Add dynamic project routes
  for (const project of projects) {
    if (project.slug) {
      routes.push({
        url: `${siteUrl}/referanslar/${project.slug}`,
      });
      routes.push({
        url: `${siteUrl}/en/references/${project.slug}`,
      });
      routes.push({
        url: `${siteUrl}/ru/references/${project.slug}`,
      });
    }
  }

  // Remove duplicates
  const uniqueUrls = new Set<string>();
  const uniqueRoutes: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    if (!uniqueUrls.has(route.url)) {
      uniqueUrls.add(route.url);
      uniqueRoutes.push(route);
    }
  }

  return uniqueRoutes;
}
