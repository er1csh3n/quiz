import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions, isFinished, getScore } from './actions/questions.action';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            questionNumber: 1,
            score: 0, //in redux store
        }
    }


    componentDidMount() {
        !this.props.questions && this.props.getQuestions(); //async API call when questions doesn't exist
    }

    //sets target.value from click event to user answer
    handleAnswer = (ans) => {
        console.log(ans.target.value);
        const answer = ans.target.value;
        this.setState({
            answer
        })
    };

    //calculates score of correct by dispatching getScore() every time userAnswer is the correct answer
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

    //handles next question by incrementing index and number to render next question and dispatches isFinished() when
    //we have reached the last question of quiz
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

    //handleFinish = () => {
    //if (this.state.questionNumber > this.props.questions.length){
    //this.props.isFinished();
    //}
    //}

    //while finished is false display question
    displayQuestion = () => {
        if (!this.props.finished){
            return (
                <div className="question">{this.props.questions[this.state.questionIndex].question}</div>
            )}
    };

    //while finished is false render question options
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
                            />
                            <span style={{fontSize: '24px', fontWeight: 'bold'}}>{ans}</span>
                        </label>
                    </div>
                )
            })
        }
    };

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


const mapStateToProps = (state) => { //what we need from store
    return {
        questions: state.questions,
        finished: state.finished,
        score: state.score
    }
};

export default connect(mapStateToProps, {getQuestions, isFinished, getScore})(Quiz);
// connect(what we need from store, what we dispatch)
