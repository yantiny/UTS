'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Choose from './components/choose';
import ProductSlider from './components/product';
import ExperienceSection from './components/experience';
import MaterialsSection from './components/materials';
import TestimonialsSection from './components/testimonial';
import Footer from './components/footer';

export default function HeroSection() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Choose/>
      <ProductSlider/>
      <ExperienceSection/>
      <MaterialsSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}

