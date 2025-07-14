import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import ReflectionsSection from '../components/ReflectionsSection';
import MilestonesSection from '../components/MilestonesSection';
import HomeBuiltSection from '../components/HomeBuiltSection';
import RootsAndDreamsSection from '../components/RootsAndDreamsSection';
import PromisesSection from '../components/PromisesSection';
import QuoteSection from '../components/QuoteSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-walnut-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <TimelineSection />
      <ReflectionsSection />
      <MilestonesSection />
      <HomeBuiltSection />
      <RootsAndDreamsSection />
      <PromisesSection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;