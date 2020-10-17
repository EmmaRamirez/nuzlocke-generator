import * as React from 'react';
import { Button, Intent, Toaster } from '@blueprintjs/core';


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


export interface ImageUploadProps {
    onSuccess: (data: string) => void;
    onError?: (error: any) => void;
}

const onUpload = ({onSuccess, onError}: ImageUploadProps) => async (e: any) => {
    const file = e?.target?.files?.[0];
    const size = e.target.files[0].size / 1024 / 1024;
    const toaster = Toaster.create();
    if (size > 0.5) {
        toaster.show({
            message: `File size of 500KB exceeded. File was ${size.toFixed(2)}MB`,
            intent: Intent.DANGER,
        });
    } else {
        try {
            const image = await toBase64(file);
            onSuccess && onSuccess(image as string);

            console.log(image);
            toaster.show({
                message: 'Upload successful!',
                intent: Intent.SUCCESS,
            });
        } catch (e) {
            onError && onError(e);
            toaster.show({
                message: `Error in parsing file. ${e}`,
                intent: Intent.DANGER,
            });
        }
    }
};

export function ImageUpload({onSuccess, onError}: ImageUploadProps) {
    return <>
        <Button icon='upload'>Upload Image</Button>
        <input accept='image/*' style={{ cursor: 'pointer', opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} onChange={onUpload({onSuccess, onError})} type='file' />
    </>;
}
