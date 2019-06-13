import React from 'react';
import { connect } from 'react-redux';

/** Class that represents Result Component */
class Result extends React.Component {

    /**
     * renders result page that displays total score
     */
    render() {
        if (this.props.questions){
            return (
                <div className="card">
                    <h1> Score: <strong>{this.props.score}</strong> out of <strong>{this.props.questions.length}</strong> correct!</h1>
                </div>
            )
        }
        else{
            return null
        }
    }
}

/**
 * selects what we need from redux store (questions, score) and returns as an object every time store state changes
 */
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        score: state.score
    }
};

export default connect(mapStateToProps)(Result);
