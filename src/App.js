import React from 'react';
import './App.css';
import { getQuestions} from "./components/actions/questions.action";
import { connect } from "react-redux";
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';

/** Class that represents App Component */
class App extends React.Component {


    /**
     * conditionally renders Quiz component while finished is false and Result component when it is true
     */
    render() {
        return (
            <main className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Quartz Quiz</h2>
                </div>
                <div>{this.props.finished}</div>
                {this.props.finished ? <Result/> : <Quiz/>}
            </main>
        );
    }
}

/**
 * selects what we need from redux store (questions, finished) and returns as an object every time store state changes
 */
const mapStateToProps = (state) => {
    console.log(state);
    return {
        questions: state.questions,
        finished: state.finished
    }
};


export default connect(mapStateToProps, {getQuestions})(App);


