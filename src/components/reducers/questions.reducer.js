import { GET_QUESTIONS, IS_FINISHED, GET_SCORE } from "../actions/questions.action";


/**
 * reducer that takes in GET_QUESTION type and returns questions in action.payload.data or it default returns state
 */
export const questionsReducer = (state = null, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            console.log(action.payload.data);
            return action.payload.data;


        default:
            return state;
    }

};

/**
 * reducer that takes in IS_FINISHED type and changes finished to true or it default returns state
 */
export const finishedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_FINISHED:
            return true;
        default:
            return state;
    }
};


/**
 * reducer that takes in GET_SCORE type and returns incremented score every time getScore is dispatched,
 * else it returns state(unchanged score)
 */
export const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case GET_SCORE:
            return state + 1;
        default:
            return state;
    }
};
