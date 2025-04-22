// Page for task tracker where we can add code from 

"use client";

import { useEffect, useState } from 'react';
import AuthHeader from '../../components/AuthHeader';
import Tasks from '../../components/Tasks';

export default function TaskTracker() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [advice, setAdvice] = useState('');

  // current date 
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  // fetch current time every minute update
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/New_York");
        const data = await response.json();
        setCurrentTime(data.time);
      } catch (error) {
        console.error("Failed to fetch time:", error);
        setCurrentTime("Failed to load time");
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  // all to fetch and utilize api to get life adivce quote evrry hour
  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Failed to fetch advice:", error);
        setAdvice("Take it one step at a time.");
      }
    };

    fetchAdvice(); 
    const interval = setInterval(fetchAdvice, 3600000); // update every hour

    return () => clearInterval(interval); // clears interval
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <AuthHeader />
      <div className="text-center p-4 text-lg font-semibold bg-slate-700 space-y-1">
        {/* date */}
        <div>{currentDate}</div>
        {/* time */}
        <div>Current Time: {currentTime} EDT</div>
      </div>

      <Tasks />

      {/* life advice diaplayed here */}
      <div className="p-4 text-center italic bg-slate-700 mt-4">
        <p className="text-base">🧠 Advice of the hour: "{advice}"</p>
      </div>
    </div>
  );
}
