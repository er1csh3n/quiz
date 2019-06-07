import { GET_QUESTIONS, IS_FINISHED, GET_SCORE } from "../actions/questions.action";

export const questionsReducer = (state = null, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            console.log(action.payload.data);
            return action.payload.data;


        default:
            return state;
    }

};

export const finishedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_FINISHED:
            return true;
        default:
            return state;
    }
};

export const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case GET_SCORE:
            return state + 1;
        default:
            return state;
    }
};
