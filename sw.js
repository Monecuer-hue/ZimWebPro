self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("zimwebpro-cache").then(cache =>
      cache.addAll(["/", "/index.html", "/manifest.json"])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
