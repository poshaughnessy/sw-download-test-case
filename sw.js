self.addEventListener('fetch', event => {

  if (event.request.url.endsWith('/test')) {
    event.respondWith(new Response('This is the text that should be downloaded',
      {headers: { 'Content-Type': 'text/plain' }}));
  }

});