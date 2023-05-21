import React, { useState, useEffect } from "react";
import './MotivationalQuotes.css'


const MotivationalQuotes = () => {

  const [currentQuote, setCurrentQuote] = useState("");


  const motivationalQuotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. - Chantal Sutherland",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Don't stop when you're tired. Stop when you're done. - Unknown",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Freedom without discipline, makes you a slave to your desires. -Keeanu Rodriguez",
    "Enjoy the process. - Josh Nelson",
    "There may be people who have more talent than you, but there's no excuse for anyone to work harder than you do. - Derek Jeter"
  ];

  

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      setCurrentQuote(motivationalQuotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className="motivation">{currentQuote}</h3>
    </div>
  );
};

export default MotivationalQuotes;
