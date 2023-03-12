//Service Worker
self.addEventListener('install', (event) => {
    console.log('event: Service Worker is Installing');
    debugger;
    const install = async () => {
        debugger;
        setTimeout(() => {
            debugger;
            console.log('Service Worker is Installed!');
            self.skipWaiting();
        }, 2000);
    }
    event.waitUntil(install());
});

self.addEventListener('activate', event => {
    debugger;
    console.log('event: Service Worker is Activate!');
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