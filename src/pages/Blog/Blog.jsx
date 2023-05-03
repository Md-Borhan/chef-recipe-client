import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="w-full md:w-4/5 lg:w-2/3 xl:1/2 px-3 md:px-0 mx-auto my-14 ">
      <h2 className="text-center text-4xl mb-8 sm:text-5xl lg:text-7xl text-black tracking-tighter font-bold">
        Our Blogs
      </h2>
      <div ref={ref}>
        <div className="mb-5 p-5 shadow-md border rounded-md shadow-blue-200">
          <h3 className="text-2xl md:text-3xl text-black mb-2">
            Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <p>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="mb-5 p-5 shadow-md border rounded-md shadow-blue-200">
          <h3 className="text-2xl md:text-3xl text-black mb-2">
            Tell us the difference between nodejs and express js.?
          </h3>
          <p>
            Node.js provides an environment for running JavaScript code on the
            server-side, which enables developers to build server-side
            applications using JavaScript. Node.js is built on top of the Google
            V8 engine and uses an event-driven, non-blocking I/O model that
            allows it to handle a large number of concurrent connections
            efficiently.
            <br />
            Express.js is a web application framework built on top of Node.js
            that simplifies the process of building web applications. It
            provides a set of features and tools that make it easy to define
            routes, handle requests, and manage middleware in a web application.
          </p>
        </div>
        <div className="mb-5 p-5 shadow-md border rounded-md shadow-blue-200">
          <h3 className="text-2xl md:text-3xl text-black mb-2">
            How to validate React props using PropTypes?
          </h3>
          <p>
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components. React has a built-in package
            called PropTypes that allows you to validate the props that are
            passed to your components. This package provides a set of validators
            that can check the type of the props, whether the props are
            required, and even whether the props should match a certain pattern.
          </p>
        </div>
        <div className="mb-5 p-5 shadow-md border rounded-md shadow-blue-200">
          <h3 className="text-2xl md:text-3xl text-black mb-2">
            What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            A custom hook is a JavaScript function that allows you to extract
            and reuse logic from a React functional component. Custom hooks are
            a powerful feature of React that allows you to share functionality
            across multiple components in a clean and efficient way. By
            encapsulating a specific piece of logic into a custom hook, you can
            reuse that logic in multiple components and avoid duplicating code.
            <br />
            Custom hooks can be created to extract logic and state management
            from React components, making them reusable across multiple
            components. They allow us to separate concerns and keep our code
            organized, reducing the amount of code repetition and making it
            easier to maintain.
          </p>
        </div>
      </div>
      <div className="text-center ">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-error text-white" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;
