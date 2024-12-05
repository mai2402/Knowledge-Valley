import { useState } from "react";
import CourseCard from "./CourseCard";
import ListFilterBox from "../../ui/ListFilterBox";
import useFilterList from "../../hooks/useFilterList";

const courses = [
    {
      id: 1,
      name: "HTML & CSS for Beginners",
      description: "Learn the fundamentals of web design with HTML and CSS.",
      category: "Web Development",
      price: 49.99,
      discount: 10, // in percentage
      duration: 12, // in hours
      level: "Beginner"
    },
    {
      id: 2,
      name: "JavaScript Essentials",
      description: "Dive deep into JavaScript and master the basics of programming.",
      category: "Web Development",
      price: 59.99,
      discount: 15,
      duration: 15,
      level: "Beginner"
    },
    {
      id: 3,
      name: "Advanced React.js",
      description: "Master advanced React concepts including hooks, context, and Redux.",
      category: "Web Development",
      price: 79.99,
      discount: 20,
      duration: 20,
      level: "Advanced"
    },
    {
      id: 4,
      name: "Node.js & Express",
      description: "Build scalable server-side applications using Node.js and Express.",
      category: "Web Development",
      price: 69.99,
      discount: 10,
      duration: 18,
      level: "Intermediate"
    },
    {
      id: 5,
      name: "Introduction to Python",
      description: "Get started with Python programming for data analysis and automation.",
      category: "Programming",
      price: 49.99,
      discount: 5,
      duration: 10,
      level: "Beginner"
    },
    {
      id: 6,
      name: "Mathematics for Data Science",
      description: "Learn essential math concepts like linear algebra and calculus for data science.",
      category: "Math",
      price: 99.99,
      discount: 20,
      duration: 25,
      level: "Advanced"
    },
    {
      id: 7,
      name: "Statistics and Probability",
      description: "Understand the core principles of statistics and probability for data analysis.",
      category: "Math",
      price: 59.99,
      discount: 10,
      duration: 15,
      level: "Intermediate"
    },
    {
      id: 8,
      name: "Calculus I: Limits and Derivatives",
      description: "A comprehensive introduction to the fundamentals of calculus.",
      category: "Math",
      price: 69.99,
      discount: 0,
      duration: 20,
      level: "Intermediate"
    },
    {
      id: 9,
      name: "Machine Learning Basics",
      description: "Learn how machine learning works and apply algorithms to real-world problems.",
      category: "Data Science",
      price: 89.99,
      discount: 15,
      duration: 22,
      level: "Intermediate"
    },
    {
      id: 10,
      name: "Deep Learning with TensorFlow",
      description: "Build neural networks and deep learning models using TensorFlow.",
      category: "Data Science",
      price: 129.99,
      discount: 25,
      duration: 30,
      level: "Advanced"
    },
    {
      id: 11,
      name: "UX/UI Design Fundamentals",
      description: "Learn the basic principles of user experience and user interface design.",
      category: "Design",
      price: 54.99,
      discount: 10,
      duration: 12,
      level: "Beginner"
    },
    {
      id: 12,
      name: "Photoshop for Beginners",
      description: "Master Photoshop tools and techniques for graphic design.",
      category: "Design",
      price: 44.99,
      discount: 0,
      duration: 8,
      level: "Beginner"
    },
    {
      id: 13,
      name: "Introduction to Digital Marketing",
      description: "Learn the fundamentals of digital marketing and how to use it to grow your business.",
      category: "Marketing",
      price: 59.99,
      discount: 5,
      duration: 10,
      level: "Beginner"
    },
    {
      id: 14,
      name: "SEO and SEM Essentials",
      description: "Understand the basics of SEO and SEM for improving website visibility.",
      category: "Marketing",
      price: 74.99,
      discount: 15,
      duration: 14,
      level: "Intermediate"
    },
    {
      id: 15,
      name: "Agile Project Management",
      description: "Learn how to manage projects using Agile methodologies.",
      category: "Business",
      price: 64.99,
      discount: 20,
      duration: 18,
      level: "Intermediate"
    },
    {
      id: 16,
      name: "Entrepreneurship 101",
      description: "Understand the basics of starting and running a successful business.",
      category: "Business",
      price: 39.99,
      discount: 10,
      duration: 10,
      level: "Beginner"
    },
    {
      id: 17,
      name: "Financial Accounting for Beginners",
      description: "Learn the basics of financial accounting and how to manage financial statements.",
      category: "Business",
      price: 69.99,
      discount: 0,
      duration: 20,
      level: "Beginner"
    },
    {
      id: 18,
      name: "Leadership and Team Management",
      description: "Develop leadership skills and learn how to manage teams effectively.",
      category: "Business",
      price: 79.99,
      discount: 15,
      duration: 12,
      level: "Intermediate"
    },
    {
      id: 19,
      name: "Creative Writing",
      description: "Learn how to craft compelling stories and develop your writing skills.",
      category: "Arts & Humanities",
      price: 49.99,
      discount: 5,
      duration: 10,
      level: "Beginner"
    },
    {
      id: 20,
      name: "Photography Basics",
      description: "Master the basics of photography, from camera settings to composition.",
      category: "Arts & Humanities",
      price: 39.99,
      discount: 10,
      duration: 8,
      level: "Beginner"
    }
  ];
  
 

  const unifiedLevels = [...new Set(courses.map((courseItem)=>courseItem.level))]

  const unifiedCategories = [...new Set(courses.map((courseItem)=>courseItem.category))]

  function CourseList() {
    
  const {handleFilteredByCategory,handleFilteredByLevel,totalResults,filteredCourses}= useFilterList(courses)

    
      return (<>
        <div  className="flex flex-row justify-between items-center"> 
          <div>
              <ListFilterBox  list={unifiedLevels} placeholder="filter by level" onSelection={handleFilteredByLevel}  />
              <ListFilterBox  list={unifiedCategories} placeholder="filter by Category" onSelection={handleFilteredByCategory}/>
          </div>
              <span>{totalResults} Result</span>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
              </>

      );
  }
  
  export default CourseList;
  