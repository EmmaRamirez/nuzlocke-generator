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
    console.log(import.meta.env.VITE_CORS_ANYWHERE_URL);
    const response = await fetch(`${import.meta.env.VITE_CORS_ANYWHERE_URL ?? "https://cors-anywhere-nuzgen.herokuapp.com"}/${url}`, {
        mode: 'cors',
        // Origin: location.origin,
        // @ts-expect-error valid for cors-anywhere
        'X-Requested-With': 'XMLHttpRequest',
    });
    const img = await response.blob();

    return `url(${await fileToBase64(img)})`;
}

export async function wrapImageInCORSPlain(url: string) {
    const response = await fetch(`${import.meta.env.VITE_CORS_ANYWHERE_URL ?? "https://cors-anywhere-nuzgen.herokuapp.com"}/${url}`, {
        mode: 'cors',
        // @ts-expect-error valid for cors-anywhere
        'X-Requested-With': 'XMLHttpRequest',
    });
    const img = await response.blob();

    return `${await fileToBase64(img)}`;
}
