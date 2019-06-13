import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions, isFinished, getScore } from './actions/questions.action';

/** Class that represents Quiz Component */
class Quiz extends Component {

    /**
     * @constructor
     * set initial state with questionIndex and questionNumber to load first question
     * set initial score to 0 (score is connected to redux store)
     */
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            questionNumber: 1,
            score: 0
        }
    }


    /**
     * after mounting, perform async API call to server to get questions as a JSON object
     */
    componentDidMount() {
        !this.props.questions && this.props.getQuestions();
    }

    /**
     * answer handler that sets target.value to user answer from click event
     * @param {string} ans - user answer from click event
     */
    handleAnswer = (ans) => {
        console.log(ans.target.value);
        const answer = ans.target.value;
        this.setState({
            answer
        })
    };


    /**
     * score handler that dispatches getScore() every time the userAnswer is a correct answer
     */
    handleScore = (e) => {
        e.preventDefault();
        const userAnswer = this.state.answer;
        //Score
        if (userAnswer === this.props.questions[this.state.questionIndex].correctAnswer) {
            //dispatch here
            this.props.getScore();
        }
        this.handleNext();
    };

    /**
     * next question handler that renders next question by incrementing questionIndex and questionNumber until
     * the last question in which case isFinished() is dispatched to render Result component
     */
    handleNext = () => {
        const questionIndex = this.state.questionIndex + 1;
        const questionNumber = this.state.questionNumber + 1;
        if (this.state.questionNumber === this.props.questions.length){
            this.props.isFinished()
        }
        else {
            this.setState({
                questionIndex,
                questionNumber,
            })
        }
    };


    /**
     * displays question while quiz is not finished
     */
    displayQuestion = () => {
        if (!this.props.finished){
            return (
                <div className="question">{this.props.questions[this.state.questionIndex].question}</div>
            )}
    };

    /**
     * displays question options while quiz is not finished
     */
    displayChoices = () => {
        if (!this.props.finished){
            return this.props.questions[this.state.questionIndex].answers.map((ans) => {
                return (
                    <div className="answer_choices">
                        <label className="radioCustomLabel">
                            <input
                                className="radio_box"
                                type="radio" name="answer"
                                value={ans}
                                onChange={this.handleAnswer}
                                required
                            />
                            <span style={{fontSize: '24px', fontWeight: 'bold'}}>{ans}</span>
                        </label>
                    </div>
                )
            })
        }
    };

    /**
     * renders question counter, question, question options and handles next question with submit button
     */
    render() {
        if (this.props.questions) {
            return (
                <div className="App">
                    <div className="Question card center_div">
                        <div style={{background: '#003366'}} className="card-header question_counter">
                            <i style={{color: '#ffffff'}}>Question {this.state.questionNumber} out of {this.props.questions.length}</i>
                            <strong style={{color: '#ffffff'}}>{this.displayQuestion()}</strong>
                        </div>
                        <form className="form-group">
                            {this.displayChoices()}
                            <button className= "btn btn-outline-dark" onClick={this.handleScore}>Next</button>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
}

/**
 * selects what we need from redux store (questions, finished, score) and returns as an object
 * every time store state changes
 */
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        finished: state.finished,
        score: state.score
    }
};

export default connect(mapStateToProps, {getQuestions, isFinished, getScore})(Quiz);
