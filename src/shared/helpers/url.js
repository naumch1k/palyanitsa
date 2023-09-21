import { baseUrl } from '../constants/base-url';

export const removeTrailingSlash = url => url.replace(/\/+$/, '');

const normalizePath = path => {
  if (!path) return '';

  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = path => `${removeTrailingSlash(baseUrl)}${normalizePath(path)}`;
