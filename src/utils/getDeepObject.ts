// https://stackoverflow.com/questions/15523514/find-by-key-deep-in-a-nested-object
export function getDeepObject(theObject, n) {
    let result = null;
    if( theObject instanceof Array) {
        for (var i = 0; i < theObject.length; i++) {
            result = getDeepObject(theObject[i], n);
            if (result) {
                break;
            }
        }
    }
    else {
        for (var prop in theObject) {
            console.log(prop + ': ' + theObject[prop]);
            if (prop === n) {
                return theObject;
            }
            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = getDeepObject(theObject[prop], n);
                if (result) {
                    break;
                }
            }
        }
    }
    return result;
}
