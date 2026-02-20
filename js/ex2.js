
function getArrayInfo(arr) {

    let result = {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };

    return result;
}