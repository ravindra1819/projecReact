import { useState, useReducer } from "react";
import { initialState, bankReducer } from "./Reducers/bankReducer";

export default function BankAccount() {

  const [state, dispatch] = useReducer(bankReducer, initialState);
  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border h-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Bank Account System
      </h2>

      <h4 className="text-lg font-semibold mb-4">
        Current Balance:
        <span className="text-green-600"> $ {state.balance}</span>
      </h4>

      <input
        type="text"
        placeholder="EnterAmount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-3 m-auto mt-3">
        {/* Deposit */}
        <button
          onClick={() => {
            dispatch({ type: 'DEPOSIT', amount });
            setAmount("");
          }}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Deposit
        </button>

        {/* WithDraw */}
        <button
          onClick={() => {
            dispatch({ type: 'WITHDRAW', amount });
          }}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Withdraw
        </button>

        <button onClick={() => {
          dispatch({ type: 'RESET' });
        }}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>

        <div className="flex-1 justify-center">
          <h3 className="text-sm font-semibold mt-7 mb-2">Transaction History</h3>

          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {state?.transcations.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )

}