document.addEventListener("DOMContentLoaded", () => {

    console.log("Scrapbook Viewer Version 0.3");

    Mirador.viewer({
        id: "viewer-stage",
        windows: [
            {
                manifestId: "https://normanfellows.github.io/scrapbook-viewer/manifests/manifest-00.json"
            }
        ]
    });

});
