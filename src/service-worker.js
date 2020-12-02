/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
const cacheName = 'alaneicker.com';
const filesToCache = ['/', '/index.html', '/src.e31bb0bc.css'];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  const dataUrl = 'https://www.alaneicker.com/';
  if (e.request.url.indexOf(dataUrl) === 0) {
    e.respondWith(
      fetch(e.request).then((response) =>
        caches.open(cacheName).then((cache) => {
          cache.put(e.request.url, response.clone());
          console.log('[ServiceWorker] Fetched & Cached Data');
          return response;
        }),
      ),
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  }
});
