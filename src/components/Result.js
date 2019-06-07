import React from 'react';
import { connect } from 'react-redux';

class Result extends React.Component {
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

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        score: state.score
    }
};

export default connect(mapStateToProps)(Result);
