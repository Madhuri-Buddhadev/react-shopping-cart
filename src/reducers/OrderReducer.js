import {CREATE_ORDER,CLEAR_ORDER} from "../Types";

const orderReducer =(state ={},action) =>{
    switch(action.type){
        case CREATE_ORDER:
            return{order:action.payload};
            case CLEAR_ORDER:
                return{orser:null}
                default:
                return state;

    }
};
export {orderReducer};