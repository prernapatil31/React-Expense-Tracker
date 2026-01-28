export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      // Sort by newest first
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
