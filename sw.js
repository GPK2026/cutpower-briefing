const CACHE = 'cp-briefing-kw25-v3';
const ASSETS = ['./DACH_EMobility_Briefing_KW25_2026.html','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{if(res&&res.status===200){const c=res.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c))}return res}).catch(()=>caches.match('./DACH_EMobility_Briefing_KW25_2026.html'))))});
