import React from 'react';
import './App.css';
import { getQuestions} from "./components/actions/questions.action";
import { connect } from "react-redux";

class App extends React.Component {


    componentDidMount() {
        !this.props.questions && this.props.getQuestions(); //Node API call
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>React Quiz</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //React Redux implementation
    return {
        questions: state.questions
    }
};


export default connect(mapStateToProps, {getQuestions})(App);



