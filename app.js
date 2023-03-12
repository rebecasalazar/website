if (navigator.serviceWorker) {
    console.log('se puede usar service worker!');
    navigator.serviceWorker.register('/sw.js').then();

}