import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const country = 'in';
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar height={5} color='#f11919' progress={progress} />
        <div className='container' style={{ marginTop: '70px' }}>
          <h2 className='text-center'>NewsMonkey - Top headlines...</h2>

          <div className='d-flex'>
            <p className="h5 me-3">Categories: </p>
            <Link className="nav-link me-2" aria-current="page" to="/"><span className="badge rounded-pill text-bg-secondary">General</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/business"><span className="badge rounded-pill text-bg-secondary">Business</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/entertainment"><span className="badge rounded-pill text-bg-secondary">Entertainment</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/health"><span className="badge rounded-pill text-bg-secondary">Health</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/science"><span className="badge rounded-pill text-bg-secondary">Science</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/sports"><span className="badge rounded-pill text-bg-secondary">Sports</span></Link>
            <Link className="nav-link me-2" aria-current="page" to="/technology"><span className="badge rounded-pill text-bg-secondary">Technology</span></Link>
          </div>

          <Routes>
            <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key='home' pageSize={pageSize} country={country} category={'general'} />} />
            <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country={country} category={'general'} />} />
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} country={country} category={'business'} />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} country={country} category={'entertainment'} />} />
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} country={country} category={'health'} />} />
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} country={country} category={'science'} />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} country={country} category={'sports'} />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} country={country} category={'technology'} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;