import { combineReducers } from "redux";
import {finishedReducer, questionsReducer, scoreReducer} from "./questions.reducer";


export const rootReducer = combineReducers({
    questions: questionsReducer,
    finished: finishedReducer,
    score: scoreReducer
});
