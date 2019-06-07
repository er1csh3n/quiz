import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions, isFinished, getScore } from './actions/questions.action';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            //probably redux store
            questionNumber: 1,
            score: 0,
        }
    }


    componentDidMount() {
        !this.props.questions && this.props.getQuestions(); //Node API call
    }

    handleAnswer = (ans) => {
        console.log(ans.target.value);
        const answer = ans.target.value;
        this.setState({
            answer
        })
    };

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

    displayQuestion = () => {
        if (!this.props.finished){
            return (
                <div className="question">{this.props.questions[this.state.questionIndex].question}</div>
            )}
    };

    displayChoices = () => {
        if (!this.props.finished){
            return this.props.questions[this.state.questionIndex].answers.map((ans) => {
                return (
                    <div className="answer_choices">
                        <label className="radioCustomLabel">
                            <input className="checkmark" type="radio" name="answer" value={ans} onChange={this.handleAnswer}/>
                            <span style={{fontSize: '20px'}}>{ans}</span>
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
                        <form>
                            {this.displayChoices()}
                            <button onClick={this.handleScore}>Next</button>
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


const mapStateToProps = (state) => { //React Redux implementation
    return {
        questions: state.questions,
        finished: state.finished,
        score: state.score
    }
};

export default connect(mapStateToProps, {getQuestions, isFinished, getScore})(Quiz);
