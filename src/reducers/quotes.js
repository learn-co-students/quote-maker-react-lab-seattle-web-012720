import uuid from 'uuid';

// const id = uuid();

export default function quotes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      const id = uuid();
      return [...state, {...action.quote, id, votes: 0}]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return state.map(quote => quote.id !== action.quoteId ? quote : {...quote, votes: quote.votes + 1})

      case 'DOWNVOTE_QUOTE':
      return state.map(quote => quote.id !== action.quoteId ? quote : quote.votes === 0 ? quote : {...quote, votes: quote.votes - 1})
  }
  return state;
}
