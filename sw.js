const JAMB_CACHE = 'jamb-cache-v2';
const urlsToCache = [
    './',
    './index.html',
    './podesavanja.html',
    './style.css',
    './script.js',
    './prevod.js',
    './manifest.json',
    './static/images/icon.png',
    './static/images/cells/image0.png',
    './static/images/cells/image1.png',
    './static/images/cells/image2.png',
    './static/images/cells/image3.png',
    './static/images/cells/image4.png',
    './static/images/cells/image5.png',
    './static/images/cells/sum.png',
    './static/images/cells/setting.png',
    './static/images/explanations/YAMB1.sr.bs.mk.me.png',
    './static/images/explanations/YAMB1.en.png',
    './static/images/explanations/YAMB1.hr.sl.png',
    './static/images/explanations/YAMB2.sr.bs.mk.me.png',
    './static/images/explanations/YAMB2.en.png',
    './static/images/explanations/YAMB2.hr.sl.png',
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