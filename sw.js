
// self.addEventListener('fetch', event => {
//     debugger;
//     console.log(event);
// });


self.addEventListener('install', event => {
    debugger;
    console.log('service worker installing...');
    console.log(event);
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    debugger;
    // delete old cachoe
    console.log('service worker is active...');
    console.log(event);
});