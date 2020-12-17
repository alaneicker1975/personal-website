// /* eslint-disable no-restricted-globals */
// const cacheName = 'alaneicker.com';
// const filesToCache = ['/', '/index.html', '/src.e31bb0bc.css'];

// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open(cacheName).then((cache) => cache.addAll(filesToCache)),
//   );
// });

// self.addEventListener('fetch', (e) => {
//   const dataUrl = 'https://www.alaneicker.com/';
//   if (e.request.url.indexOf(dataUrl) === 0) {
//     e.respondWith(
//       fetch(e.request).then((response) =>
//         caches.open(cacheName).then((cache) => {
//           cache.put(e.request.url, response.clone());
//           return response;
//         }),
//       ),
//     );
//   } else {
//     e.respondWith(
//       caches.match(e.request).then((response) => response || fetch(e.request)),
//     );
//   }
// });
