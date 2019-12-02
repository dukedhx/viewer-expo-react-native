const controllers = {}

self.addEventListener('install', event => {
  console.log('installing')
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', event => {
  console.log('activating')
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    async function () {
      const url = new URL(event.request.url)
      const groups = url.pathname.match(/^\/(.+\/)?(assets\/.*)/)
      const path = groups ? groups[2] : null
      if (url.host==location.host&&path) {
        (await clients.get(event.clientId)).postMessage({ path })
        const stream = new ReadableStream({
          start (controller) {
            controllers[path] = controller
          }
        })
        return new Response(stream)
      } else return fetch(event.request)
    }())
})

self.onmessage = function (e) {
  controllers[e.data.path].enqueue(Uint8Array.from(atob(e.data.payload), c => c.charCodeAt(0)))
  controllers[e.data.path].close()
}
