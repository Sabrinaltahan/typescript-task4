
## Installation and Usage

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:
    npm install
4. Run the development server:
    ng serve --open

5. view the application.

## Features

- Retrieve course data from a JSON file using Angular HttpClient.
- Display course data in a table format.
- Search for courses by course code or name.
- Sort courses by course code, course name, or progression.
- Reset search filter to display all courses.

## Technologies Used

- Angular
- TypeScript
- HTML/CSS
- HttpClient
- rxjs

## Data Source

The course data is retrieved from [Web Development Program Course Data](https://webbetveckling.miun.se/files/ramschema_ht23.json).


## Requirements for the task

Requirements for the assignment to be considered approved:

- You have created an Angular application that retrieves data from a web service/JSON file and presents it to the screen.
- You have created a service (or more) that handles the communication to retrieve data from the JSON file, by using HttpClient.
- You have created a table that contains data for course code, course name and progression.
- It is possible to sort the data by course code, course name and progression.
- It is possible to filter/search data by entering a text phrase.
- The user interface is automatically updated when clicking to sort and change the search phrase.
- The task is published to a publicly available web host and can be tested.
- The source code is published using Git, along with a descriptive README.md file that describes how your application is - constructed and works.