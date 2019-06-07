import React from 'react';
import { connect } from 'react-redux';

class Result extends React.Component {
    render() {
        if (this.props.questions){
            return (
                <div>
                    <h1> Score: {this.props.score} out of {this.props.questions.length}</h1>
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
