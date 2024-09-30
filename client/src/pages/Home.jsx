import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Home() {
  return (
    <div className="home-container p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 min-h-screen">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to BookSummarize</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Your go-to platform for quick, insightful book summaries.
        </p>
      </header>

      {/* Intro Section */}
      <section className="intro-section my-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Discover and Share Summaries
        </h2>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-6">
          Dive into a collection of expertly crafted book summaries across
          various genres. Share your own summary or explore summaries shared by
          others.
        </p>
        <Button gradientDuoTone="pinkToOrange" size="lg" outline>
          <Link to="/explore-summaries">Explore Summaries</Link>
        </Button>
      </section>

      {/* Recent Summaries Section */}
      <section className="recent-summaries my-12">
        <h2 className="text-xl font-semibold mb-4">Recent Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample summary cards. Replace with dynamic data in production */}
          <div className="summary-card p-4 shadow-md bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-bold">The Alchemist</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By Paulo Coelho
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A journey of self-discovery that will inspire you to follow your
              dreams...
            </p>
            <Link
              to="/summary/the-alchemist"
              className="text-teal-500 dark:text-teal-400 mt-4 block"
            >
              Read More
            </Link>
          </div>
          <div className="summary-card p-4 shadow-md bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-bold">Atomic Habits</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By James Clear
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A practical guide on how to build good habits and break bad
              ones...
            </p>
            <Link
              to="/summary/atomic-habits"
              className="text-teal-500 dark:text-teal-400 mt-4 block"
            >
              Read More
            </Link>
          </div>
          <div className="summary-card p-4 shadow-md bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-bold">Educated</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By Tara Westover
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A memoir of a woman who grows up in a strict and abusive household
              in rural Idaho...
            </p>
            <Link
              to="/summary/educated"
              className="text-teal-500 dark:text-teal-400 mt-4 block"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center my-12">
        <h2 className="text-2xl font-semibold mb-4">Share Your Summary</h2>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-6">
          Got a book in mind? Write a summary and share it with our community.
        </p>
        <Button gradientDuoTone="cyanToBlue" size="lg" outline>
          <Link to="/create-summary">Create Summary</Link>
        </Button>
      </section>
    </div>
  );
}

export default Home;