// Introduction to React.js


// React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of their applications efficiently. 

//It helps developers builds interactive and fast web apps easily.

//React is a component based,which means you build small,reusable pieces(Called Components) and combine them to create a full app


//Why React.js?

//1. Component-based structure helps build large apps faster and easier to maintain.

//2. Faster performance using virtual DOM.

//3. Used in many popular apps like facebook,WhatsApp,Instagram,Netflix etc.



// What is mean by DOM?

//DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.





//What are components?

//A Component is like a small building block of a web page.

//Each component does one thing-like showing a button,a header,a card,or a form.

//Components make your code cleaner,reusable and easier to maintain.

// In react,we write components using Typescript+HTML-like code called tSX.

//Instead of writing the whole webpage in one file, you split it into smaller parts.

//Example of a component:

//website--> header,footer,sidebar,content area are all components of a webpage.

//Real life example:-

//A car is made up of many components like engine,tires,steering wheel,brakes etc. Each component has its own functionality and can be reused in different cars. Similarly, in React.js, components can be reused across different parts of the application.






//What is props?

//Props are short for properties. They are a way to pass data from a parent component to a child component in React.js. Props allow you to customize the behavior and appearance of components by providing them with different values.



//What is mean by state?

//State is a variable that stores changing data in a React component. When the state changes, React automatically updates the UI.

//Example:-

//switching between light and dark mode, when user clicks on a button, the state changes and the UI updates accordingly.

//What is mean by HOOK?

//A Hook is a special React function that adds features like state and lifecycle behavior to functional components.

//Exampe:- 
/*import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default App;*/







//What is mean by Event handling?
//Event handling in React.js is the process of responding to user interactions like clicks, keypresses, etc. Events are handled by passing functions as props to components, which are then executed when the event occurs.

//For example,Imagine a TV remote control. When you press a button on the remote, it sends a signal to the TV to perform an action, like changing the channel or adjusting the volume. In React.js, event handling works similarly. When a user interacts with a component (like clicking a button), an event is triggered, and a function (event handler) is called to perform a specific action in response to that event.

//Example:-
/*function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;*/






//What is mean by conditional rendering?
//Conditional rendering in React.js allows you to render different components or elements based on certain conditions. It's a way to control what gets displayed on the screen depending on the state of your application.
//In simple way, Conditional Rendering means showing one thing if a condition is true, and another thing if it's false.
// for example,conditional rendering is like a traffic light. Depending on the color of the light (condition), you either stop, go, or slow down (render different components). 


//What is lists?

//A list is a collection of multiple items.

//Example:- A list of fruits, a list of students, a list of tasks etc.

/*const students = [
  "Rohit",
  "Rahul",
  "Anitha",
  "Kiran"
];*/





//What is mean by keys in react?

//Keys are unique identifiers used in React.js to help efficiently update and manage lists of elements. When rendering a list of components, each component should have a unique key to help React identify which items have changed, been added, or removed. This improves performance and ensures that the UI updates correctly when the underlying data changes.

// Eaxample:- Imagine you have a list of students in a classroom. Each student has a unique ID number (key). When a student leaves or joins the class, you can quickly identify which student has changed based on their unique ID, rather than checking every student's name. Similarly, in React.js, keys help efficiently update the UI when the list of components changes.






//What is mean by Hooks?

//Hooks are special functions provided by React that allow functional components to use React features like state, side effects, context, and more.

//Real life example,Mobile phone:-

//A new phone do basic thinks like calling and messaging. But when you install apps, you can do more things like browsing the internet, playing games, or using social media. Similarly, Hooks add extra features to functional components in React.js, allowing them to do more than just render UI.

//Functional components-->Hooks-->more features.

//types:-
   //1) useState:-
              //useState stores data that changes over time.

              //Example:
              //const [count, setCount] = useState(0);

    //2) useEffect:-
             
              /*useEffect performs actions automatically after the component renders.//showing something on the screen.

              Example:
              useEffect(() => {
                  console.log("Component Loaded");
              }, []);
              Uses:
              API Calls
              Timers
              Local Storage
              Document Title */

    //3) UseRef:-
             // Access HTML elements directly.

    //4) UseMemo:-
              //useMemo saves the result of a calculation so React doesn't calculate it again unnecessarily.
              //easy way:-Remember expensive calculations.

              //uses:-
             // Large Calculations
             // Filtering Data
             // Sorting Data         

    //5) useCallBack:-
                //saves a function and reuses it instead of creating a new one every time the component re-renders.

                //Syntax:-
                //const handleClick = useCallback(() => {

                    //  console.log("Hello");

                   // }, []);

      //6) useContext:-

                    //useContext allows multiple components to access shared data without passing props through every level.
                    //Uses:
                       /* Dark/Light Theme
                        Logged-in User
                        Language
                        Shopping Cart*/






//What is mean by Forms?:-

// A form is used to collect information from the user.

//Example:- A login form, a registration form, a contact form etc.



// What is mean by component communication?

//Component communication in React.js refers to the way components interact and share data with each other. There are two main types of component communication: parent-to-child and child-to-parent.

//Why we need component communication?

//suppose i build e-commerce website, where i have a product list component and a shopping cart component. When a user adds a product to the cart, the product list component needs to communicate with the shopping cart component to update the cart's contents. This is an example of parent-to-child communication, where the product list (parent) sends data (the selected product) to the shopping cart (child).

//APP-->Header-->Hero-->Footer

//Parent child communication:-
/*import Hero from "./Hero";

function App() {
  return (
    <>
      <Hero name="Rohit" />
    </>
  );
}

export default App;*/

//child:-

/*type HeroProps = {
  name: string;
};

function Hero({ name }: HeroProps) {
  return <h1>Welcome {name}</h1>;
}

export default Hero;*/








//What is mean by Context API?

//Context API allows components to share data directly, without passing props through every intermediate component.

//Example:- Imagine a school where the principal wants to share an important announcement with all the students. Instead of telling each student individually, the principal can make an announcement over the school intercom system, which reaches all students at once. Similarly, in React.js, the Context API allows data to be shared across multiple components without having to pass it down through every level of the component tree.

//here some steps to use context API in react.js

//Step 1:- Create a context using React.createContext().
//src/context/UserContext.tsx

//import { createContext } from "react";

//export const UserContext = createContext("");

//What is mean by Create contest?
//A:-It creates a place where data can be stored and shared.

//Step 2:-Provide context
//in APP.tsx file

//Example:-
/*import { UserContext } from "./context/UserContext";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContext.Provider value="Rohit">
      <Profile />
    </UserContext.Provider>
  );
}

export default App;*/

//What is provider?
//The Provider shares the data with all components inside it.

//Step 3:-Consume Context

//create profile.tsx file 
/*import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const name = useContext(UserContext);

  return (
    <h1>Welcome {name}</h1>
  );
}

export default Profile;*/

// how it works?
/*App

↓

Provider

↓

Stores "Rohit"

↓

Profile

↓

useContext()

↓

Receives "Rohit"*/

//When to use contextAPI?

/*Theme (Dark/Light)
 Logged-in User
 Language
 Shopping Cart
 Authentication*/


 //What is mean by API Integration?
 //API Integration means connecting your React app to another server or application to get or send data.

 //real life example:-


/*You

↓

Swiggy App

↓

Restaurant

↓

Food

↓

Swiggy App

↓

You*/

/*You → User
Swiggy App → React App
Restaurant → Server
Food → Data
Connection → API Integration
The app communicates with the restaurant through an API.
This communication is called API Integration.*/




//loading state?

//example:-const [users, setUsers] = useState<User[]>([]);
          //const [loading, setLoading] = useState(true);



//What is mean by Error handling?

//Error Handling means showing a useful message when something goes wrong.

//example:- imagine you opened insta for see messages but you dont have internet on that time it will shows one msg like "connect internet" this is called error handling.




//What is mean by folder structure?
//Folder Structure means arranging your project files in an organized way so they are easy to find and maintain.




/* Hey guys i have build small react.js project, Name is Todo-lists.

  A to‑do list is simply a list of tasks or activities you want to complete, usually organized in a way that makes it easy to track progress.
  a to‑do list typically means:

1) Adding tasks: Users can enter items they need to do (e.g., "Finish homework", "Buy groceries").

2) Editing tasks: Updating or changing details of a task.

3) Deleting tasks: Removing tasks once they’re no longer needed.

4) Marking tasks as complete: Checking off items when finished.

5) Displaying tasks: Showing them in a neat, interactive UI.


The Most Important React Concepts in This Project are:-

1) useState:-
Stores changing data.
const [task, setTask] = useState<string>("");

2) useEffect
Runs code when something changes.
useEffect(() => {
  // save todos
}, [todos]);

3) interface
Defines the structure of data.
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

4) map()
Displays multiple tasks.
todos.map((todo) => ...)


5) filter()
Removes or selects tasks.
todos.filter((todo) => ...)

6) find()
Finds one task.
todos.find((todo) => todo.id === id)

7) Props
Pass data/functions between components.
<TodoItem
  todo={todo}
  onDelete={deleteTodo}
/>*/





