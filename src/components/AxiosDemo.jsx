import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosDemo({ page = 1 }) {
  const limit = 20;
  const apiEndPoint = "https://jsonplaceholder.typicode.com/todos";

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const [allTodos, setAllTodos] = useState([]);

  // Calculate items for current page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  useEffect(() => {
    setLoading(true);

    axios
      .get(apiEndPoint)
      .then((res) => {
        if (res.status === 200) {
          setAllTodos(res.data);
        } else {
          console.log("Error fetching data");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setTodo(allTodos.slice(startIndex, endIndex));
  }, [allTodos, page]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Axios Pagination Demo
        </h2>

        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">SI.No</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>

              <tbody>
                {todo.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border text-center">{item.id}</td>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border text-center">
                      {item.completed ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                      ) : (
                        <span className="text-red-600 font-semibold">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => window.location.href = `?page=${page - 1}`}
          className="px-6 py-2 bg-gray-300 rounded-xl disabled:opacity-50"
        >
          Prev
        </button>

        <button
          disabled={endIndex >= allTodos.length}
          onClick={() => window.location.href = `?page=${page + 1}`}
          className="px-6 py-2 bg-blue-500 text-white rounded-xl disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
