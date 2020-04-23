import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {downvoteQuote, upvoteQuote, removeQuote} from '../actions/quotes'


class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {
                return <QuoteCard quote={quote} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} />
              })} 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {quotes: state.quotes}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     downvoteQuote: (id) => {
//       dispatch(downvoteQuote(id))
//     },
//     upvoteQuote: (id) =>
//   };
// };

export default connect(mapStateToProps, {downvoteQuote, upvoteQuote, removeQuote})(Quotes);
