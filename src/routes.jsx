import React from "react";
import { LoginPage } from "./LoginPage";
import { ActionManager } from "./pages/ActionManager/ActionManager";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ChangeStudent } from "./pages/ChangeStudent/ChangeStudent";
import { ManagerList } from "./components/MangerList/MangerList";
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
    path: "/student/:add",
    exact: false,
    main: ({match}) => <ActionManager match={match}/>
  },
  {
    path: "/sua",
    exact: false,
    main: ({match}) => <ChangeStudent match={match} />
  }
];
export { routes };
