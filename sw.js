self.addEventListener('install', async (event) => {
console.log('install');

let wait = async()=>{
}
event.waitUntil( wait() );//wait
});//install

self.addEventListener('fetch', (event) => {
    console.log(event.request);  
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response);
          return response.clone();
        });
      });
    })
  );
});

