import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  country = 'in';
  state = {
    progress: 0
  };
  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    console.log("apiKey: ", this.apiKey);
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar height={5} color='#f11919' progress={this.state.progress} />
          <div className='container my-3'>
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
              <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='home' pageSize={this.pageSize} country={this.country} category={'general'} />} />
              <Route path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={this.pageSize} country={this.country} category={'general'} />} />
              <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={this.pageSize} country={this.country} category={'business'} />} />
              <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country={this.country} category={'entertainment'} />} />
              <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={this.pageSize} country={this.country} category={'health'} />} />
              <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={this.pageSize} country={this.country} category={'science'} />} />
              <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country={this.country} category={'sports'} />} />
              <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country={this.country} category={'technology'} />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}
