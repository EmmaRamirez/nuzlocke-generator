function fileToBase64(file: Blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
            resolve(reader.result);
        };

        reader.onerror = reject;
    });
}

export async function wrapImageInCORS(url: string) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
        mode: 'cors',
        // Origin: location.origin,
        // @ts-ignore
        'X-Requested-With': 'XMLHttpRequest'
    });
    const img = await response.blob();

    return `url(${await fileToBase64(img)})`;
}

export async function wrapImageInCORSPlain(url: string) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
        mode: 'cors',
    });
    const img = await response.blob();

    return `${await fileToBase64(img)}`;
}
