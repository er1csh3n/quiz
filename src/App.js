import React from 'react';
import './App.css';
import { getQuestions} from "./components/actions/questions.action";
import { connect } from "react-redux";
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';

class App extends React.Component {


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

const mapStateToProps = (state) => { //React Redux implementation
    console.log(state);
    return {
        questions: state.questions,
        finished: state.finished
    }
};


export default connect(mapStateToProps, {getQuestions})(App);


