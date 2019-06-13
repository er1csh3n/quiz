import axios from 'axios';

const URL = 'http://localhost:3001/api/questions';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const IS_FINISHED = 'IS_FINISHED';
export const GET_SCORE = 'GET_SCORE';


/**
 * action that returns a promise payload that is an axios API get request
 */
export const getQuestions = () => {
    const getQuestionsPromise = axios.get(URL);
    return {
        type: GET_QUESTIONS,
        payload: getQuestionsPromise
    };
};

/**
 * action that returns a type IS_FINISHED
 */
export const isFinished = () => {
    return {
        type: IS_FINISHED
    };
};

/**
 * action that returns a type GET_SCORE
 */
export const getScore = () => {
    return {
        type: GET_SCORE
    };
};
