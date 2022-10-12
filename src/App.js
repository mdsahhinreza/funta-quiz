// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Notfoud from './components/Notfoud/Notfoud';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader :async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/home',
          loader :async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/topics',
          loader :async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path:'quiz/:topicId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path:'*',
          element:<Notfoud></Notfoud>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/statistics',          
          loader :async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
