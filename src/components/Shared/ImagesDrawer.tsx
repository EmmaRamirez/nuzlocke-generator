
import { Icon, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { ImageUpload } from './ImageUpload';

const uuid = require('uuid');

const userImages = new Set<Image>();

const getImages = () => {
    const request = window.indexedDB.open('NuzlockeGenerator', 3);

    request.onerror = event => Promise.reject(event);

    request.onsuccess = event => {
        // @ts-expect-error
        const db = event?.target?.result;
        const imageStore = db.transaction('images', 'readwrite').objectStore('images');
        imageStore.openCursor().onsuccess = function (event: any) {
            const cursor = event.target.result;
            if (cursor) {
                const image = cursor?.value;
                cursor.continue();
            } else {
                return;
            }
        };
    };
};

export interface Image {
    id: string;
    name?: string;
    image: string;
}


export function ImagesDrawer() {
    const [refresh, setRefresh] = React.useState('');
    const [images, setImages] = React.useState<Image[]>([]);


    const deleteImage = (id: string) => () => {
        const request = window.indexedDB.open('NuzlockeGenerator', 3);

        request.onsuccess = event => {
            // @ts-expect-error
            const db = event?.target?.result;
            const request = db
                .transaction('images', 'readwrite')
                .objectStore('images')
                .delete(id);

            request.onsuccess = () => {
                console.log('image deleted');
                setRefresh(id);
            };
        };
    };

    return <div className='images-drawer p-2'>
        <div className='p-2 relative'>
            <ImageUpload
                onSuccess={(image, fileName) => {
                    const request = window.indexedDB.open('NuzlockeGenerator', 3);
                    request.onerror = event => console.log(event);
                    // request.onsuccess = event => console.log(event);
                    request.onupgradeneeded = event => {
                        // @ts-expect-error
                        const db = event?.target?.result;

                        const images = db.createObjectStore('images', {keyPath: 'id'});
                        images.createIndex('image', 'image', {unique: false});
                        images.createIndex('name', 'name', {unique: true});
                        // const id = uuid();
                        // console.log(id);

                        // images.transaction.oncomplete = event => {
                        //     const imageStore = db.transaction('images', 'readwrite').objectStore('images');
                        //     imageStore.add({id, image: image});
                        // };
                    };
                    request.onsuccess = event => {
                        // @ts-expect-error
                        const db = event?.target?.result;

                        const id = uuid();
                        console.log(id);

                        const imageStore = db.transaction('images', 'readwrite').objectStore('images');
                        imageStore.add({id, image: image, name: fileName});
                        // addImage({id, name: fileName, image: image});
                        setRefresh(id);
                    };
                }}
            />
        </div>
        <div className='flex flex-wrap'>
            {images.map(image => <div key={image.id} className='bg-white p-1 m-1 border border-gray w-40 h-40 relative flex justify-center align-center overflow-y-auto '>
                <img className='object-contain' src={image.image} alt={image.name} title={image.name} />
                <div className='absolute bottom-0 left-0 w-full flex p-1 bg-white'>
                    <input
                        readOnly
                        className='w-24'
                        value={image.name}
                    />
                    <Icon className='ml-auto cursor-pointer' onClick={deleteImage(image.id)} icon='trash' intent={Intent.DANGER} />
                </div>
            </div>)}
        </div>
    </div>;
}
