import addItems from "./addItem";
import { combineReducers } from "redux";
import searchItem from "./search";

const rootReducers = combineReducers({
    addItem: addItems,
    searchItem: searchItem,
});

export default rootReducers;

