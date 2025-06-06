// pwa.js

let deferredPrompt

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault() // Prevent default mini-infobar
  deferredPrompt = e

  // Optionally, show your own custom "Install" button
  const installBtn = document.getElementById('installBtn')
  if (installBtn) {
    installBtn.style.display = 'block'
    installBtn.addEventListener('click', async () => {
      installBtn.style.display = 'none'
      deferredPrompt.prompt()

      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      deferredPrompt = null
    })
  }
})

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('✅ Service Worker registered:', reg.scope))
      .catch((err) => console.error('❌ Service Worker registration failed:', err))
  })
}
