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
              Local state. Global state. Server state. URL state.</p><br></br>
              <p className='q-p'><span className='text-xl font-bold'>Local (UI) state –</span> Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p><br></br>
              <p className='q-p'><span className='text-xl font-bold'>Global (UI) state –</span>Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.</p><br></br>
              <p className='q-p'><span className='text-xl font-bold'>Server state –</span>Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p><br></br>
              <p className='q-p'><span className='text-xl font-bold'>URL state –</span>Data that exists on our URLs, including the pathname and query parameters.

URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p><br></br>
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

            <p className='q-p'><span className='ans'>Ans:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Blog;