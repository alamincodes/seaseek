import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import Quiz from "./pages/quiz/Quiz";
import SingleQuiz from "./pages/quiz/SingleQuiz";
import Home from "./pages/home/Home";
import VirtualTrip from "./pages/VirtualTrip/VirtualTrip";
import Courses from "./pages/courses/Courses";
import Course from "./pages/courses/Course";
import Mapbox from "./pages/mapbox/Mapbox";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/quiz/:id",
          element: <SingleQuiz />,
        },
        {
          path: "/mapbox",
          element: <Mapbox />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/courses/:id",
          element: <Course />,
        },
        {
          path: "/virtual-trip",
          element: <VirtualTrip />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
