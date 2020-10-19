
export interface DialogView {
    imageUploader: false;
}

export interface View {
    dialogs: DialogView;
}

export function view (state: View = {
    dialogs: {
        imageUploader: false,
    }
}, action) {
    switch (action.type) {
        case 'TOGGLE_DIALOG':
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.dialog]: !state?.[action.dialog]
                }
            };
        default:
            return state;
    };
}
