
const CACHE='q5007-v2',FILES=['./','./index.html','./style.css','./app.js','./questions.js','./questions2.js','./manifest.webmanifest','./icon.svg'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
