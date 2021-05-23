import React from "react";
import { LoginPage } from "./LoginPage";
import { ActionManager } from "./pages/ActionManager/ActionManager";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
const routes = [
  {
    path: "/login",
    exact: false,
    main: () => <LoginPage />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About/>,
  },
  {
    path: "/student/add",
    exact: false,
    main: () => <ActionManager/>
  }
];
export { routes };
