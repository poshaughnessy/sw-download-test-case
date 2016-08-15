self.addEventListener('fetch', event => {

  if (event.request.url.endsWith('/test')) {

    event.respondWith
      (new Response('This is the text that should be downloaded'),
        {headers: {'Content-Type': 'text/plain'}});

    // (Also tried without the header)

  } else if (event.request.url.endsWith('/test-html')) {

    // Example from: https://jakearchibald.com/2015/thats-so-fetch/
    event.respondWith(
      new Response('<h1>Hello!</h1>',
        {headers: {'Content-Type': 'text/html'}})
    );

  }

});