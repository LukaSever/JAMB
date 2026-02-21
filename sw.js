const JAMB_CACHE = 'jamb-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './pravila.html',
    './style.css',
    './script.js',
    './manifest.json',
    './static/images/icon.png',
    './static/images/image0.png',
    './static/images/image1.png',
    './static/images/image2.png',
    './static/images/image3.png',
    './static/images/image4.png',
    './static/images/image5.png',
    './static/images/sum.png',
    './static/images/setting.png',
    './static/images/YAMB1.png',
    './static/images/YAMB2.png',
    './static/mp3/najava.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(JAMB_CACHE)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== JAMB_CACHE)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});