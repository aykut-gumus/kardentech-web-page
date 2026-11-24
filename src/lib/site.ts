export const SITE_URL = 'https://www.kardentech.com.tr';
export const DEFAULT_OG_IMAGE = '/images/brand/kardentech-logo.png';

export function withTrailingSlash(path: string): string {
  if (!path || path === '/') {
    return '/';
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

export function toAbsoluteUrl(path: string): string {
  return `${SITE_URL}${withTrailingSlash(path)}`;
}

export function toAssetUrl(assetPath: string): string {
  const normalized = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${SITE_URL}${normalized}`;
}
