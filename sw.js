
self.addEventListener('install', (event) => {

    console.log('service worker installing...');
    console.log(event);

    debugger;
    const install = async () => {

        debugger;

        setTimeout(() => {

            console.log('service worker installed!');
            debugger;
            self.skipWaiting();
        }, 2000);
    }

    event.waitUntil(install());
});

self.addEventListener('activate', event => {
    debugger;
    // delete old cache
    console.log('service worker is activating...');
    console.log(event);
});

self.addEventListener('fetch', (event) => {
    debugger;
    console.log('fetch event:');
    console.log(event);
});

self.addEventListener('sync', (event) => {
    debugger;
    console.log('sync event:');
    console.log(event);
});

self.addEventListener('push', (event) => {
    debugger;
    console.log('push event:');
    console.log(event);
});