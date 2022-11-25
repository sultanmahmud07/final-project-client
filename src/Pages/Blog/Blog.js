import React from 'react';
import '../../commonStyles/style.css';
import './style.css';

const Blog = () => {
  return (
    <div>

      <div className='common-w'>
        <div className=" text-center d-block">
          <h1 className='blog-title topic-header text-5xl py-4 font-semibold my-5'>These are Blogs!!!</h1>
        </div>
        <div className="container mt-2">
          <div className="single-question">
            <div className="title-wrapper">
              <div >
                <h2 className="q-title">1.  What are the different ways to manage a state in a React application?</h2>
              </div>
            </div>
            <p className='q-p'><span className='ans'>Ans:</span> The Four Kinds of React State to Manage
              Local state. Global state. Server state. URL state.</p>
          </div>
          <div className="single-question">
            <div className="title-wrapper">
              <div>
                <h2 className="q-title">2. How does prototypical inheritance work? </h2>
              </div>
            </div>
            <p className='q-p'><span className='ans'>Ans:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
          </div>

          <div className="single-question">
            <div className="title-wrapper">
              <div>
                <h2 className="q-title">3. What is a unit test? Why should we write unit tests?</h2>
              </div>
            </div>
            <p className='q-p'><span className='ans'>Ans:</span> Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p><br />
            <p className='q-p'>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

          </div>
          <div className="single-question">
            <div className="title-wrapper">
              <div>
                <h2 className="q-title">4. React vs. Angular vs. Vue?</h2>
              </div>
            </div>

            <p className='q-p'><span className='ans'>Ans:</span> This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

              Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

              If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Blog;