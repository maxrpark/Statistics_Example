# Statistics_Example

## 1 - Boiler plate

1 - The project is created using React and Typescript and created using Vite. After cloning the repository and installing the dependencies you can run

```bash
npm run dev
```

to start the development server.

## 2 - Layout

I created the same layout as figma so it is not responsive now, if you also want to see a responsive layout let me know and I will add queries.

## 3 - Branches

There are two branches main and dev, the main difference between the two branches is how I handled the styles.

- main
  In the main branch, you will find all the styles in the app.css, which is enough to take care of all the styles of the layout.
- dev
  In the dev branch, I used an approach I normally choose for bigger projects which are using [STYLED COMPONENTS](https://styled-components.com/). The most benefits I find from this approach are that is easy to maintain, read, and avoid name coalition plus it is easier to organize.

## 4 - Utils folder

This folder contains two files, "links.ts" and "statData.ts"

links.ts
contain some arrays with the links for the navbar and footer. I like to handle these types of values this way because they can map them into the React Components and if they are used in a different part of the application, it is easy to make modifications.

statData.ts

Contain the data for the stats and chart. Since it is a static example I did not use props apart from one component.

In my option, if the project is at least relatively big I would use the React Hook called [useContext](https://react.dev/reference/react/useContext), which allows a component to access a state that is stored at a higher level in the component tree, without needing to pass the state down through props or use a state management library such as [Redux](https://redux.js.org/).

## 5 - Chart

For the chart I used [Rechart](https://recharts.org/en-US), which is a simple but quite complete library that helps you display different types of charts and can be customized.
