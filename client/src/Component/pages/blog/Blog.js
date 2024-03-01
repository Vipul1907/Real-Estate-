import React, { useState } from "react";
// import HomeSectionCarousel from "../../multiuse/card/HomeSectionCarousel";
import "../CssFile/Blog/blog.css";
const Blog = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="blog">
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)} className="btn_1">Increment</button>
      {/* Button to decrement the count */}
      <button onClick={() => setCount(count - 1)} className="btn_2">Decrement</button>
    </div>
  );
};

export default Blog;
