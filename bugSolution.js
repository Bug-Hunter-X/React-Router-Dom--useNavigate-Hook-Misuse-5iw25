```javascript
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home'); // Now this will work correctly
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}
```