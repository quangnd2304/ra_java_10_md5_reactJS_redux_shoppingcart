import { CHANGE_NOTIFY } from "../constants/actionTypes";
import { notify_ready } from "../constants/notify";
const initialState = notify_ready;
const notify = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFY:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default notify;