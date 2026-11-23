/* VaultGlass offline support — upload this file next to the app page (same folder). */
const CACHE = 'vaultglass-v2';
const ALLOW = [self.location.origin, 'https://cdnjs.cloudflare.com', 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.add('./').catch(() => {})).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', e => { const u = e.data && e.data.cache; if (u) e.waitUntil(fetch(u).then(res => res.ok && caches.open(CACHE).then(c => c.put(u, res))).catch(() => {})); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (!ALLOW.some(o => u.href.startsWith(o))) return;           // never cache favicon/icon services
  e.respondWith(
    fetch(r).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
