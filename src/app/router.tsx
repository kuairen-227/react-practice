import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { Home } = await import("./routes/Home");
        return { Component: Home };
      },
    },
    {
      path: "/projects",
      lazy: async () => {
        const { Projects } = await import("./routes/Projects");
        return { Component: Projects };
      },
    },
    {
      path: "/tasks",
      lazy: async () => {
        const { Tasks } = await import("./routes/Tasks");
        return { Component: Tasks };
      },
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFound } = await import("./routes/NotFound");
        return { Component: NotFound };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
