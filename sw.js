const JAMB_CACHE = 'jamb-cache-v3';
const urlsToCache = [
    './',
    './index.html',
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
    './static/mp3/najava.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(JAMB_CACHE)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});