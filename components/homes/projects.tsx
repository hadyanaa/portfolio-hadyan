"use client";
import { useEffect, useRef, useState } from "react";
import Button from "../atoms/button";
import Image from "next/image";
import Card from "../atoms/card";

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
  const [showAll, setShowAll] = useState<boolean>(false);
  const itemsToShow = showAll ? filteredPortfolio : filteredPortfolio.slice(0, 6);
  const [backToTopElement, setBackToTopElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setBackToTopElement(document.getElementById("projects"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/portfolio.json');
        const data = await response.json();
        setPortfolio(data);
        setFilteredPortfolio(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category: any) => {
    setFilterCategory(category);
    if (!category) {
      setFilteredPortfolio(portfolio); 
    } else {
      const filtered = portfolio.filter(cat => cat?.category.toLowerCase() === category.toLowerCase());
      setFilteredPortfolio(filtered);
    }
  };

  console.log(itemsToShow.length);
  return (
    <div id="projects" className="flex flex-col items-center justify-center gap-4 mt-12 pt-20 xl:mt-40 mb-24">
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

      {/* list portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
        {itemsToShow.map((item, index) => (
          <>
            <Card
              title={item.title}
              category={item.category}
              description={item.description}
              stack={item.stack}
              url_image={item.url_image}
              url_project={item.url_project}
            />
          </>
        ))}
      </div>
      {
        itemsToShow.length > 5 ?
        <Button
          onClick={() => {
            setShowAll(!showAll)
            if (showAll) backToTopElement?.scrollIntoView(true)
          }}>{showAll ? 'Show Less' : 'Show More'}</Button>
          : ''
      }
    </div>
  )
}