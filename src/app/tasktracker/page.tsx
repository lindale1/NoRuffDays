// Page for task tracker where we can add code from 
"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Tasks from '../../components/Tasks'

export default function TaskTracker() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  // date is displayed with JavaScript
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

  // time dispalyed with API
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
    const interval = setInterval(fetchTime, 60000); // this is so it constantly updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Header />
      <div className="text-center p-4 text-lg font-semibold bg-slate-700 space-y-1">
        {/*Display Date */}
        <div>{currentDate}</div> 
        {/*Display time with API */}
        <div>Current Time: {currentTime} EDT</div>
      </div>
      <Tasks />
    </div>
  );
}
