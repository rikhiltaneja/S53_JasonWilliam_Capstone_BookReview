import { Button } from 'flowbite-react';
import React from 'react'

function About() {
  return (
    <div className="py-16 " style={{marginTop:"10vh"}}>  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://web-static.wrike.com/blog/content/uploads/2017/09/books-creative-teams.jpg?av=a5e377fc6789d166adf45a2ec5c8ace6" alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl" style={{color:"#905de8"}}>BookReview a Web to explore Books! </h2>
            <p className="mt-6 text-gray-600">Welcome to our BookReview website, At Bookreview, we believe that everyone deserves the joy and knowledge that books offer, even with busy schedules. Our mission is to make reading accessible and engaging, sparking a love for literature regardless of your time constraints!</p>
            <p className="mt-4 text-gray-600"> Our summaries help you decide if a book is worth investing your precious time in. We believe everyone can benefit from the wisdom and inspiration found in books. Welcome to your go-to destination for Reading!</p>
          </div>
        </div>
        <div className="py-16 " style={{marginTop:"10vh"}}>  
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
         
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl" style={{color:"#905de8", fontFamily:"sans-serif"}}>Join us on this Journey! </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily:"sans-serif"}}>Explore our extensive library of book summaries, discover new authors and genres, and rediscover the joy of reading—all within the constraints of your busy life. Let's make reading a part of your daily routine, one insightful summary at a time!</p>
           
          </div>
          <div className="md:w-5/12 lg:w-5/12" >
            <Button style={{ backgroundColor:"purple",height:"5vh", width:'20vh', fontSize:"103px" }}>EXPLORE ↦</Button>
          </div>
        </div>
        </div>
    </div>
  </div>
  
);
};

export default About