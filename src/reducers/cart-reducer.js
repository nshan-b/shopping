import { data } from "autoprefixer";

const cartReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'ADD_ITEM':
            let arr = [...state];
            let found = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].uid == action.uid) {
                    let count = parseInt(arr[i].count)
                    if (count + parseInt(action.quantity) > 5) {
                        arr[i].count = 5
                        // Don't let the user get passed 5
                        return arr;
                    }

                    arr[i].count = count + parseInt(action.quantity)
                    found = true;
                }
            }

            if (!found) {
                arr.push({
                    uid: action.uid,
                    count: parseInt(action.quantity),
                    price: parseFloat(action.price),
                    img_path: action.img_path,
                    name: action.name,
                    category: action.category,
                })
            }

            return arr;
        
        case 'SET_COUNT':
            let ar = [...state];

            for (let i = 0; i < ar.length; i++) {
                if (ar[i].uid == action.uid) {
                    ar[i].count = action.quantity;
                }
            }

            return ar;

        case 'REMOVE_ITEM':
            let a = [...state];
            let splice = -1;

            for (let i = 0; i < a.length; i++) {
                if (a[i].uid == action.uid) {
                    if (parseInt(a[i].count) - parseInt(action.quantity) <= 0) {
                        splice = i;
                    }
                    else {
                        let count = parseInt(a[i].count)
                        a[i].count = count - parseInt(action.quantity)
                    }
                }
            }

            if (splice != -1) {
                a.splice(splice, 1);
            }

            return a;

        case 'RESET_CART' :
            return [];
        default: 
            return state
    }
}

export default cartReducer;