import { GET_QUESTIONS } from "../actions/questions.action";

export const questionsReducer = (state = null, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            console.log(action.payload.data);
            return action.payload.data;


        default:
            return state;
    }

};
