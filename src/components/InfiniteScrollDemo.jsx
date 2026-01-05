import { useEffect, useRef, useState } from "react";

export default function InfiniteScrollDemo() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Fetch API function
  async function fetchData(pageNum) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=15&_page=${pageNum}`
    );
    const newData = await response.json();

    setItems((prev) => [...prev, ...newData]);
  }

  // Load data when page changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Infinite Scroll Demo</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            padding: 20,
            margin: "10px 0",
            background: "#f2f2f2",
            borderRadius: 8,
          }}
        >
          <h4>{item.title}</h4>
        </div>
      ))}

      {/* Loader Trigger */}
      <div ref={loaderRef} style={{ height: "40px" }} />

      <p style={{ textAlign: "center" }}>Loading more...</p>
    </div>
  );
}
