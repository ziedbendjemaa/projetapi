
  
import { combineReducers } from "redux";
import {reducerdata, reducernewdata } from "./reducer";

const listreducer =combineReducers({
    allphoto: reducerdata,
    allnewdata:reducernewdata
})
export default listreducer;