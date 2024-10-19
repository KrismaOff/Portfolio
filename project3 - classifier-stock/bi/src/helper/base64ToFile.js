export function base64ToFile(base64, filename) {
    // Convert base64 to raw binary data held in a string
    let byteString = atob(base64);

    // Write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that you can save
    let blob = new Blob([ab], { type: "application/octet-stream" });

    // Create a link element, simulate clicking it and then remove it
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
