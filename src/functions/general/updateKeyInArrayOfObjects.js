export default function updateKeyInArrayOfObjects(array, idToFind, keyToFind, newValue) {
    return array.map(item => {
        const newItem = { ...item };
        if (newItem.id === idToFind && newItem.hasOwnProperty(keyToFind)) {
            newItem[keyToFind] = newValue;
        }
        for (let key in newItem) {
            if (typeof newItem[key] === 'object' && newItem[key] !== null) {
                newItem[key] = updateKeyInArrayOfObjects([newItem[key]], idToFind, keyToFind, newValue)[0];
            }
        }
        return newItem;
    });
}