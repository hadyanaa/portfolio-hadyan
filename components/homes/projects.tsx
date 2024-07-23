"use client";
import { useState } from "react";
import Button from "../atoms/button";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  stack: [];
  url_image: string;
  url_project: string;
}

export default function Projects(){
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState<PortfolioItem[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('');

  const handleFilter = (category: any) => {
    setFilterCategory(category);
    if (!category) {
      setFilteredPortfolio(portfolio); 
    } else {
      const filtered = portfolio.filter(cat => cat?.category.toLowerCase() === category.toLowerCase());
      setFilteredPortfolio(filtered);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-12 xl:mt-40 mb-24">
      <h1 className="text-xl xl:text-2xl font-normal mb-8">My Projects</h1>
      {/* filter */}
      <div className="flex flex-row justify-center gap-4">
        <Button
          className={`${filterCategory === '' ? 'border-blue text-blue' : ''}`}
          onClick={() => handleFilter('')}>All</Button>
        <Button
          className={`${filterCategory === 'Frontend' ? 'border-blue text-blue' : ''}`}
          onClick={() => handleFilter('Frontend')}>Frontend</Button>
        <Button
          className={`${filterCategory === 'Fullstack' ? 'border-blue text-blue' : ''}`}
          onClick={() => handleFilter('Fullstack')}>Fullstack</Button>
        <Button
          className={`${filterCategory === 'Freelance' ? 'border-blue text-blue' : ''}`}
          onClick={() => handleFilter('Freelance')}>Freelance</Button>
        <Button
          className={`${filterCategory === 'College' ? 'border-blue text-blue' : ''}`}
          onClick={() => handleFilter('College')}>College</Button>
      </div>
    </div>
  )
}