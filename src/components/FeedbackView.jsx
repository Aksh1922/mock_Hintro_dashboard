'use client';

import { useState } from 'react';
import styles from './FeedbackView.module.css';
import { StarIcon, CheckIcon } from './Icons';
import { groupByDate } from '@/lib/utils';

function loadSavedFeedback() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const saved = window.localStorage.getItem('hintro_feedback');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function FeedbackView() {
  const [feedback, setFeedback] = useState(loadSavedFeedback);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Save feedback to localStorage
  const saveFeedback = (newFeedback) => {
    window.localStorage.setItem('hintro_feedback', JSON.stringify(newFeedback));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || !comment.trim()) {
      alert('Please provide a rating and comment');
      return;
    }

    const newFeedback = {
      id: Date.now(),
      rating,
      comment,
      timestamp: new Date().toISOString(),
    };

    const updated = [newFeedback, ...feedback];
    setFeedback(updated);
    saveFeedback(updated);

    setRating(0);
    setComment('');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const deleteFeedback = (id) => {
    const updated = feedback.filter((f) => f.id !== id);
    setFeedback(updated);
    saveFeedback(updated);
  };

  const groupedFeedback = groupByDate(feedback);

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Send Us Your Feedback</h2>
        <p className={styles.subtitle}>Help us improve by sharing your thoughts</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Rating</label>
            <div className={styles.ratingGroup}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={styles.starBtn}
                  onClick={() => setRating(star)}
                >
                  <StarIcon filled={star <= rating} />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <div className={styles.ratingText}>{rating} out of 5 stars</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment" className={styles.label}>
              Your Feedback
            </label>
            <textarea
              id="comment"
              className={styles.textarea}
              placeholder="Tell us what you think..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Feedback
          </button>

          {submitted && (
            <div className={styles.successMessage}>
              <CheckIcon /> Thank you for your feedback!
            </div>
          )}
        </form>
      </div>

      <div className={styles.historySection}>
        <h3 className={styles.historyTitle}>Feedback History</h3>

        {feedback.length === 0 ? (
          <div className={styles.noFeedback}>
            <p>No feedback yet</p>
          </div>
        ) : (
          <div className={styles.feedbackList}>
            {Object.entries(groupedFeedback).map(([date, items]) => (
              <div key={date}>
                <div className={styles.dateGroup}>{date}</div>
                {items.map((item) => (
                  <div key={item.id} className={styles.feedbackItem}>
                    <div className={styles.feedbackHeader}>
                      <div className={styles.rating}>
                        {'⭐'.repeat(item.rating)}
                      </div>
                      <button
                        type="button"
                        className={styles.deleteBtn}
                        onClick={() => deleteFeedback(item.id)}
                      >
                        ×
                      </button>
                    </div>
                    <p className={styles.comment}>{item.comment}</p>
                    <div className={styles.timestamp}>
                      {new Date(item.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
