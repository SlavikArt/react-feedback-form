import React from 'react';
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Header />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
