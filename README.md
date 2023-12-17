# Full Stack Development Using Angular Framework
## Overview
This project features a fully functional full-stack web application. It serves both customer and administrative purposes, with additional security measures implemented in the final iteration to ensure safe authentication for admin login.

## Architecture
### Frontend Development
In the frontend development, I utilized Express for server-side rendering and routing. HTML, JavaScript, and single-page application (SPA) techniques were employed to create a seamless and dynamic user experience. Express allowed for efficient server-side logic, while HTML and JavaScript were instrumental in crafting the client-side interface. The SPA approach enhanced user interactions by enabling smooth transitions between views without full page reloads.

### Backend Database Choice
The backend of the project implemented a NoSQL MongoDB database due to its flexible and scalable nature. This database primarily contained user credentials and trip information. This choice was made to support the project's needs and ensure that complex data structures could be stored and retrieved efficiently. Additionally, using a NoSQL database eliminates the need for a strict data schema, making it easier for users to store and modify data.

## Functionality
### JSON and its Role
JSON (JavaScript Object Notation) acts as a bridge between frontend and backend development. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. In this project, JSON facilitated seamless communication between the frontend and backend, ensuring a standardized and interoperable data format.

### Code Refactoring and Reusable UI Components
In this project, two main examples of code refactoring were utilized to improve the overall functionality. The first involved consolidating duplicated html code into components that could be easily called from each page. Secondly, the pages were updated to dynamically load records from the database, further enhancing the functionality of the project. Additionally, the header and footer were transformed into partials for Handlebars, allowing them to be easily called and displayed in any file. These changes were implemented with the goal of improving the overall experience and efficiency of the project.
## Testing
### API Testing and Security
This application utilized API endpoints to verify the identity of users and grant them permission to modify the database. These endpoints worked in conjunction with data methods including GET, POST, PUT, and DELETE. It is crucial to implement security measures for these endpoints to prevent unauthorized access and protect the confidential information stored in the database. Otherwise, unauthorized individuals could potentially gain entry and access sensitive data.

## Reflection
### Professional Growth
This course has been instrumental in helping me progress towards my professional goals. I have learned and developed a diverse set of skills, ranging from frontend and backend development to database management and security implementation. The hands-on experience gained from building a full-stack application has not only broadened my technical expertise but has also equipped me with problem-solving skills essential in a real-world development environment.

### Marketable Skills.
The skills acquired in this course make me a more marketable candidate in my career field. Proficiency in full-stack development, database management with MongoDB, and the ability to implement security features strengthens my candidacy. The experience of navigating the complexities of a full-stack project, from design to deployment, has provided me with a well-rounded skill set that is highly relevant in the ever-evolving tech industry.
