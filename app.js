if (navigator.serviceWorker) {

    console.log('se puede usar service worker!');

    navigator.serviceWorker.register('/sw.js').then((res) => {

        debugger;
        console.log('service worker ready');

    }).catch((err) => {

    });

    debugger;

    Notification.requestPermission().then((result) => {
        
        console.log('notification request result');
        debugger;

    }).catch((err) => {

    });

}

