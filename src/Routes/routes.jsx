import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home/Home";
import NewsDetails from "../Components/Pages/NewsDetails/NewsDetails";
import About from "../Components/Pages/About/About";
import Career from "../Components/Pages/Career/Career";
import Categories from "../Components/Pages/Home/Categories/Categories";
import NewsLayout from "../Components/Layouts/NewsLayout/NewsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/categories/:categoryId",
        element: <Categories />,
        loader:({params})=>fetch(`http://localhost:3000/categories/${params.categoryId}`)
      },
      
    ],
  },
  {
    path:'/news',
    element:<NewsLayout/>,
    children:[
      {
        path: "/news/:newsId",
        element: <NewsDetails />,
        loader:({params})=>fetch(`http://localhost:3000/news/${params.newsId}`)
      },
    ]
  }
]);

export default router;
