const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          ...action.book,
          id: state.length + 1
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;