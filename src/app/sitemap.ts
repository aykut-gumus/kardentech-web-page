import { MetadataRoute } from 'next';
import { routeMap } from '@/i18n/routes';
import { projects } from '@/data/projects';
import { toAbsoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  const pageIds = Object.keys(routeMap);
  const locales = ['tr', 'en', 'ru'] as const;

  for (const pageId of pageIds) {
    for (const locale of locales) {
      const path = routeMap[pageId]?.[locale];
      if (path && typeof path === 'string') {
        routes.push({
          url: toAbsoluteUrl(path),
        });
      }
    }
  }

  // Add dynamic project routes
  for (const project of projects) {
    if (project.slug) {
      routes.push({
        url: toAbsoluteUrl(`/referanslar/${project.slug}`),
      });
      routes.push({
        url: toAbsoluteUrl(`/en/references/${project.slug}`),
      });
      routes.push({
        url: toAbsoluteUrl(`/ru/references/${project.slug}`),
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
