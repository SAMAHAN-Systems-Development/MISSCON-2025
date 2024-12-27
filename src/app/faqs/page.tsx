'use client';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import React from 'react';

const FaqPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-dark-violet mb-6">FAQs</h1>
      <AccordionComponent />
    </div>
  );
};

export default FaqPage;
