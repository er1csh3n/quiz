import { GET_QUESTIONS, IS_FINISHED, GET_SCORE } from "../actions/questions.action";

//returns question data from getQuestion action is dispatched else return state
export const questionsReducer = (state = null, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            console.log(action.payload.data);
            return action.payload.data;


        default:
            return state;
    }

};

//changes state of finished to true when isFinished action is dispatched else return state
export const finishedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_FINISHED:
            return true;
        default:
            return state;
    }
};

//increments score/correct count every time getScore is dispatched, else return state(unchanged score)
export const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case GET_SCORE:
            return state + 1;
        default:
            return state;
    }
};
