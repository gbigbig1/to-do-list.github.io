import {CHANGE_FILTER} from "../constants";

const BASE_FILTER = 'all';

const filterReducer = (state = BASE_FILTER, { type, activeFilter}) => {
    switch (type) {
        case CHANGE_FILTER:
            return activeFilter;
            break;
        default:
            return state;
    }
}

export default filterReducer;
