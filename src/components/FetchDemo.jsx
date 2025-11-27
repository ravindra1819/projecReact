import React, { useState, useEffect } from "react";

export default function FetchDemo() {
  const apiEndPoint = "https://jsonplaceholder.typicode.com/todos";
  const [todo, setTodo] = useState([]);

  async function fetchTodos() {
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
      });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          FetchAPI Demo Component
        </h2>

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
      </div>
    </div>
  );
}
