import axios from 'axios';

const URL = 'http://localhost:3001/api/questions';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = () => {
    const getQuestionsPromise = axios.get(URL);
    return {
        type: GET_QUESTIONS,
        payload: getQuestionsPromise
    };
};
