if (navigator.serviceWorker) {

    debugger;
    console.log(`start registering service worker`);
    navigator.serviceWorker.register('/sw.js').then((res) => {
        debugger;
        console.log('service worker ready');
    }).catch((err) => {

    });

    Notification.requestPermission().then((result) => {
        console.log('notification request result');
    }).catch((err) => {

    });

}

