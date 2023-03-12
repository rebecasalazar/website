
self.addEventListener('install', (event) => {

    console.log('event: install');

    const install = async () => {
        setTimeout(() => {
            console.log('service worker installed!');
            self.skipWaiting();
        }, 2000);
    }

    event.waitUntil(install());
});

self.addEventListener('activate', event => {
    console.log('event: activate');
});

self.addEventListener('fetch', (event) => {
    console.log(`event: fetch ${event.request.url}`);
});

self.addEventListener('sync', (event) => {
    console.log(`event: sync`);
});

self.addEventListener('push', (event) => {
    console.log(`event: push`);
});