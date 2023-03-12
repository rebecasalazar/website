if (navigator.serviceWorker) {

    console.log(`Registering Service Worker...`);
    navigator.serviceWorker.register('/sw.js').then((res) => {
        debugger;
        console.log('Service Worker is Registered!');
    }).catch((err) => {

    });

    console.log('Requesting Notification Permissions...');
    Notification.requestPermission().then((result) => {
        console.log('Notification Request Result');
    }).catch((err) => {

    });

}

