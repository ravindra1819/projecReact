import { useEffect, useState } from "react";

export default function UseEffectDemo() {

  const [users, setUsers] = useState([]);

  const [theme, setTheme] = useState('light');

  const [time, setTime] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  const [count, setCount] = useState(0);

  async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }

  // Fecth API data
  useEffect(() => {
    fetchUsers();
  }, []);

  // Sync time to localStorage
  useEffect(() => {
    localStorage.setItem("app-theme:", theme)
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    document.title = `Notifications ${count}`
  }, [count]);

  return (
    <div className="p-8 bg-gray-100 flex flex-col items-center gap-30 min-h-screen">

      <h1 className="text-3xl text-indigo-600 mb-4 font-bold">
        UseEffect Real-time Example
      </h1>

      {/* 1st Example */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">1. API Users</h2>
        <div className="space-y-1">
          {users.map(u => (
            <p key={u.id} className="text-gray-700">{u.name}</p>
          ))}
        </div>

        {/* 2nd Example */}
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">2.Theme Color</h2>
          <p className="mb-4">Current Theme
            <span className="font-semibold ml-2">{theme}</span>
          </p>

          <button onClick={() => setTheme('light')}
            className="px-4 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-600 transition"
          >Light
          </button>

          <button onClick={() => setTheme('dark')}
            className="px-4 py-2 bg-gray-600 ml-2 text-white rounded-xl hover:bg-gray-900 transition"
          >Dark
          </button>
        </div>
      </div>

      {/* 3rd Example */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">3. Time Interval</h2>
        <p className="text-2xl font-bold text-green-600">{time}sec</p>
      </div>

      {/* 4th Example */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">4. Window Resize</h2>
        <p className="text-xl font-medium text-indigo-600">width: {width}px</p>
      </div>

      {/* Example 5 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">5. Document Title Update</h2>

        <p className="text-xl mb-4">Count <span className="font-bold">{count}</span></p>

        <button onClick={() => setCount(c => c + 1)}
          className="px-6 py-3 bg-green-400 text-white rounded-xl hover:bg-green-600 transition"
        >
          Incerment
        </button>

      </div>

    </div>

  )
}