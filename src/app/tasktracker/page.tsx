// Page for task tracker where we can add code from Dynamic List assignment 
"use client";
import { useEffect, useState } from 'react';
import AuthHeader from '../../components/AuthHeader';  // Correct path
import Tasks from '../../components/Tasks'
// Task tracker page view - non-authenticated

export default function TaskTracker() {

  return (
    <div>
      <AuthHeader />
      <Tasks />
    </div>

  )
}