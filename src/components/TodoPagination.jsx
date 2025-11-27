import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoPagination() {
  const [page, setPage] = useState(1);
  const [todo, setTodo] = useState([]);
  const limit = 10;
  const skip = (page - 1)* limit;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?limit=${limit}&offset=${skip}`)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err))
  }, [page]);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const pageData = todo.slice(startIndex, endIndex);
  const totalPages = Math.ceil(todo.length) / limit;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600 text-center">Todo List (PaginationExamples)</h2>
      <hr />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border p-2">S.No</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            pageData.map((todo, index) => (
              <tr className="hover:bg-gray-100" key={todo.id}>

                <td className="border p-2 text-center">
                  {(page - 1) * limit + index + 1}
                </td>

                <td className="border p-2">
                  {todo.title}
                </td>

                <td className={`border p-2 text-center font-medium ${todo.completed ? "text-green-500" : "text-red-600"}`}>
                  {todo.completed ? "Yes" : "No"}
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >Previous</button>

        <p className="text-lg font-semibold">Page of {page} from {totalPages} </p>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded bg-indigo-400 hover:bg-indigo-600 ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >Next</button>

      </div>

    </div >
  )
}
