import React, { useState, useRef } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [submittedFeedback, setSubmittedFeedback] = useState(null);
  const ratingRef = useRef(null);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedRating = ratingRef.current.value;

    if (feedback.trim() === '') {
      alert('Відгук не може бути пустим.');
      return;
    }

    setSubmittedFeedback({ feedback, rating: selectedRating });
    setFeedback('');
    ratingRef.current.value = '';
  };

  return (
    <div className="max-w-3xl mx-auto mt-4 p-8 border rounded-lg shadow-xl bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="feedback" className="block text-3xl font-semibold">Відгук</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Напишіть ваш відгук..."
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-3xl font-semibold">Рейтинг</label>
          <select
            id="rating"
            ref={ratingRef}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Оберіть рейтинг</option>
            <option value="1">1 Зірка</option>
            <option value="2">2 Зірки</option>
            <option value="3">3 Зірки</option>
            <option value="4">4 Зірки</option>
            <option value="5">5 Зірок</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors text-2xl">
          Відправити
        </button>
      </form>
      
      {submittedFeedback && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-100 shadow-md">
          <h3 className="text-3xl font-semibold">Ваш Відгук</h3>
          <p className="text-2xl mt-2">{submittedFeedback.feedback}</p>
          <div className="flex items-center mt-4">
            <span className="text-3xl">{'★'.repeat(submittedFeedback.rating)}{'☆'.repeat(5 - submittedFeedback.rating)}</span>
            <span className="ml-3 text-2xl font-medium">{submittedFeedback.rating} Зірок</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
