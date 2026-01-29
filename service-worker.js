const CACHE_NAME = "weather-app-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",

  // icons
  "/asset/app-icon-192.png",
  "/asset/app-icon-512.png",
  "/asset/welcome-img.png",

  //gif
  "/asset/loader.gif",
  "/asset/notfound.gif",

  // weather icons
  "/asset/openweathermap/01d.svg",
  "/asset/openweathermap/01n.svg",
  "/asset/openweathermap/02d.svg",
  "/asset/openweathermap/02n.svg",
  "/asset/openweathermap/03d.svg",
  "/asset/openweathermap/03n.svg",
  "/asset/openweathermap/04d.svg",
  "/asset/openweathermap/04n.svg",
  "/asset/openweathermap/09d.svg",
  "/asset/openweathermap/09n.svg",
  "/asset/openweathermap/10d.svg",
  "/asset/openweathermap/10n.svg",
  "/asset/openweathermap/11d.svg",
  "/asset/openweathermap/11n.svg",
  "/asset/openweathermap/13d.svg",
  "/asset/openweathermap/13n.svg",
  "/asset/openweathermap/50d.svg",
  "/asset/openweathermap/50n.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
