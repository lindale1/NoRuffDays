// Page for task tracker where we can add code from Dynamic List assignment 
"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Tasks from '../../components/Tasks'
// Task tracker page view - non-authenticated

export default function TaskTracker() {

  return (
    <div className="min-h-screen bg-slate-800">
      <Header />
      <Tasks />
    </div>
  )
}