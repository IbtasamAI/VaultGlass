const CACHE='vaultglass-shell-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('vaultglass-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(!SHELL.some(p=>new URL(p,self.registration.scope).pathname===url.pathname))return;
  event.respondWith(fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
    return response;
  }).catch(()=>caches.match(req)));
});
