import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Main from "./layouts/Main.tsx";
import Post from "./pages/Post.tsx";
import User from "./pages/User.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { dataPosts, singlePost } from "./services/posts";
import InvoiceSkeleton from "./components/InvoiceSkeleton.tsx";
import DetailPost from "./pages/DetailPost.tsx";
import FormPost from "./pages/FormPost.tsx";
import DetailUser from "./pages/DetailUser.tsx";
import FormUser from "./pages/FormUser.tsx";
import { usersData } from "./services/users.ts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,

    children: [
      {
        path: "home",
        Component: Home,
        loader: dataPosts,
        HydrateFallback: InvoiceSkeleton,
        children: [
          {
            path: ":id",
            Component: DetailPost,
          },
          {
            path: "formpost",
            Component: FormPost,
          },
        ],
      },

      {
        path: "post",
        children: [
          {
            index: true,
            Component: Post,
            loader: dataPosts,
            HydrateFallback: InvoiceSkeleton,
          },
          {
            path: ":id",
            Component: FormPost,
            loader: singlePost,
            HydrateFallback: InvoiceSkeleton,
          },
          {
            path: "formpost",
            Component: FormPost,
          },
        ],
      },
      {
        path: "user",
        children: [
          {
            index: true,
            Component: User,
            loader: usersData,
            HydrateFallback: InvoiceSkeleton,
          },
          {
            path: ":id",
            Component: DetailUser,
          },
          {
            path: "formuser",
            Component: FormUser,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
