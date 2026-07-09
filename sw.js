// Service Worker بسيط لموقع AlHossain — يفعّل خاصية التثبيت والعمل كتطبيق حقيقي
const CACHE_NAME = 'alhossain-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // نمرر كل الطلبات عادي للشبكة (الموقع يعتمد على بيانات حية من Firebase)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
