const JAMB_CACHE = 'jamb-cache-v3';
const urlsToCache = [
    './',
    './index.html',
    './podesavanja.html',
    './style.css',
    './script.js',
    './prevod.js',
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
    './static/images/flags/Srbija.png',
    './static/images/flags/Ujedinjeno_Kraljevstvo.png',
    './static/images/flags/Hrvatska.png',
    './static/images/flags/Bosna_i_Hercegovina.png',
    './static/images/flags/Severna_Makedonija.png',
    './static/images/flags/Slovenija.png',
    './static/images/flags/Crna_Gora.png',
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