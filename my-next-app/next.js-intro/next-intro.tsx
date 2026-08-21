/*1) Why Next.js?
Definition:
Next.js is a React framework for building fast, scalable web applications. It provides built-in features such as routing, server components, data fetching, SEO, API routes, and optimization.
Real-life example:
For an e-commerce website, Next.js can handle product pages, routing, API requests, SEO, and image optimization in one application.
Remember:  
React = UI library | Next.js = React framework



2) Project Structure
Definition:
Project structure is the organization of files and folders in a Next.js application. The app folder is the main place where you create pages, layouts, routes, loading UI, and error handling.
Real-life example:
my-next-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   
│       
├── public/
├── package.json
└── next.config.ts
Think of it like a college where different departments have different responsibilities.




3) Routing
Definition:
Routing means creating different URLs for different pages. In Next.js App Router, folders and page.tsx files automatically create routes.

easy definition:-Routing means moving between different pages of a website using different URLs.


Real-life example:
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
Creates:
/home          → Home
/about     → About
/contact   → Contact
Remember:  
Folder + page.tsx = Route


4) Layouts
Definition:
A layout is a common UI shared by multiple pages. It is useful for headers, navigation bars, sidebars, and footers.
Real-life example:
        Header
           ↓
     Page Content
           ↓
         Footer
For an online shopping website, the navbar and footer can remain the same while the product page changes.
Remember:  
Layout = Common UI



5)What is a Page?
A page is a screen that users can see when they visit a specific URL in your website.
In Next.js App Router, you create a page by creating a page.tsx file inside a folder.
Easy definition
Page = The UI/content shown for a particular URL.

Real-Life Example
Think about a college website:
College Website
│
├── Home
├── About
├── Students
└── Contact
Each one is a page.
They have different URLs:
Home      → /home
About     → /about
Students  → /students
Contact   → /contact


6)What is Metadata?
Metadata is information about your webpage that helps the browser and search engines understand what your page is about.
Common metadata includes:
Title → Name shown in the browser tab
Description → Short information about the page
Keywords → Words related to the page
Easy definition
Metadata = Information about a webpage.

Real-Life Example
Suppose you have a portfolio website.
Your page is:
Rohit - Frontend Developer
Metadata can be:
Title:
Rohit - Frontend Developer

Description:
Portfolio of a React and Next.js developer.
When someone opens your page, the title appears in the browser tab.
Search engines can also use metadata to understand and describe your page.




7) What is Navigation?
Navigation means moving from one page to another page in a website.
For example:
Home → About → Contact → Students
When you click About, you move from: / to About



8)What are Server Components?
A Server Component is a React component that runs on the server instead of the user's browser.
Easy definition
Server Component = A component that runs on the server and is mainly used for displaying data and server-side work.

Real-Life Example
Imagine a Student Management website.
You want to display:
Student List

Rohit
Rahul
Priya
The student information comes from a database.
Instead of sending database-related work to the browser:
Browser
   ↓
Request
   ↓
Server
   ↓
Database
   ↓
Student Data
The server can fetch the data and generate the page



9)What are Client Components?
A Client Component is a component that runs in the user's browser and is used when your page needs interaction.
Easy definition
Client Component = A component that runs in the browser and allows things like state, buttons, forms, and user interactions.




10)what is Data fetching?

Data fetching is the process of retrieving data from an API, database, or server and displaying it in a Next.js application. In Server Components, Next.js allows us to fetch data using async/await and fetch() on the server.

Real-Life Example
Imagine a Student Management App.
You want to display:
Student List

Rohit
Rahul
Priya
But this information is stored in an API/database.
So your application does:
Next.js
   ↓
API / Database
   ↓
Student Data
   ↓
Display on Page
That's data fetching.





11) What are API Routes?
API Routes allow you to create backend APIs inside your Next.js project.
They allow your frontend to send requests like GET, POST, PUT, and DELETE to work with data.
Easy definition
API Route = A URL in your Next.js application that handles backend requests.

Real-Life Example
Imagine you're building a Student Management App.
You need to:
View students     → GET
Add a student     → POST
Update a student  → PUT
Delete a student  → DELETE
Your frontend can communicate with your Next.js API:
Frontend
   ↓
/api/students
   ↓
Next.js API
   ↓
Database


12) images?

Next.js provides the Image component from next/image to display optimized images. It helps improve image loading performance and handles image sizing and optimization.


13)fonts?

next/font is a Next.js feature used to add and optimize fonts in a web application. Fonts can be applied globally through the root layout or to specific parts of the application.



14) Error pages?

What are Error Pages?
An error page is a page shown to the user when something goes wrong in the application.
Instead of showing a confusing technical error, we can show a friendly message.
Easy definition
Error Page = A page/UI shown when something goes wrong.

 Real-Life Example
Imagine you have a Student Management website.
The user opens:
/students
But the server cannot load the student data.
Instead of showing:
Error: Failed to fetch...
you can show:
 Something went wrong

We couldn't load the students.

[Try Again]
This is an Error UI.




15)Loading pages?

What are Loading Pages?
A loading page shows something to the user while the actual page or data is being loaded.
Easy definition
Loading Page = UI shown temporarily while content is loading.

Real-Life Example
Imagine you open an e-commerce website and the products take a few seconds to load.
Instead of showing a blank screen:

loading plz wait...





16)Deployment?

Deployment means putting your Next.js application on the internet so other people can access and use it.
Easy definition
Deployment = Making your website live on the internet.

Real-Life Example
While developing your project on your computer, you use:
http://localhost:3000
Only you can access it.*/