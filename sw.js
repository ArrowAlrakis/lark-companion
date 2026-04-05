const CACHE_NAME = "dragon-companion-v1";

const FILES_TO_CACHE = [
  "./",
  "./larkapp.html",
  "./manifest.json",
  "./offline.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png",

  "./assets/bg_trees.png",
  "./assets/bg_nest.png",

  "./assets/egg_idle.png",
  "./assets/egg_crack.png",
  "./assets/egg_open1.png",
  "./assets/egg_open2.png",

  "./assets/dragon_idle.png",
  "./assets/dragon_idle_eye_closed.png",
  "./assets/dragon_dizzy.png",
  "./assets/dragon_happy.png",
  "./assets/dragon_dirty.png",
  "./assets/dragon_sleep.png",
  "./assets/dragon_unhappy.png",
  "./assets/dragon_hungry.png",
  "./assets/dragon_look.png",
  "./assets/dragon_dirty_blink.png",
  "./assets/dragon_look_blink.png",
  "./assets/dragon_hungry_blink.png",
  "./assets/dragon_unhappy_blink.png",

  "./assets/dragon_idle_back_wing.png",
  "./assets/dragon_idle_body.png",
  "./assets/dragon_idle_body_blink.png",
  "./assets/dragon_idle_front_wing.png",

  "./assets/food.png",
  "./assets/butterfly.png",

  "./assets/food_icon.png",
  "./assets/water_icon.png",
  "./assets/butterfly_icon.png",

  "./assets/bgm.mp3",
  "./assets/Bubbles01.mp3",
  "./assets/Bubbles03.mp3",
  "./assets/Bubbles05.mp3",
  "./assets/crack.mp3",
  "./assets/eat.mp3",
  "./assets/magic.mp3",
  "./assets/dragon01.mp3",
  "./assets/dragon02.mp3",
  "./assets/dragon03.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => caches.match("./offline.html"))
      );
    })
  );
});