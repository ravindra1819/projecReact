export const initialState = {
  balance: 1000,
  transcations: []
}

export const bankReducer = (state, action) => {

  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.amount,
        transcations: [...state.transcations, `Deposited $${action.amount}`]
      }

    case "WITHDRAW":
      if (state.balance < action.amount) {
        return {
          ...state,
          transcations: [...state.transcations, "Withdrawl fails - Insufficient funds"]
        };
      }
      return {
        ...state,
        transcations: [...state.transcations, `Withdrew amount: $${action.amount}`],
        balance: state.balance - action.amount
      }

    case "RESET":
      return initialState;

    default:
      return state;
  }

}
