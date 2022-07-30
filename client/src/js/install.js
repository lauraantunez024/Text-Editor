const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.remove("hidden");
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.classList.add("hidden");
    window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.classList.add("hidden");
    window.deferredPrompt = null;
});

window
    .matchMedia("(display-mode: standalone)")
    .addEventListener("change", (event) => {
        if (event.matches) {
            butInstall.classList.add("hidden")
        }
});
