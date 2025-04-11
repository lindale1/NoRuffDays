"use client";
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Description from '../components/Description';
import Footer from '../components/Footer'
// Home page view - non-authenticated

import connectMongoDB from '../../config/mongodb';

export default function Home() {

connectMongoDB();

  return (
    <div>
      <Header />
      <Welcome />
      <Description/>
      <Footer />
    </div>

  )
}