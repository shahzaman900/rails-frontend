import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/greeting">Go to Greeting</Link>
  </div>
);

export default Home;
