import React from "react";
import { LoginPage } from "./LoginPage";
import { ActionManager } from "./pages/ActionManager/ActionManager";
import { ChangeStudent } from "./pages/ChangeStudent/ChangeStudent";

const routes = [
  {
    path: "/login",
    exact: false,
    main: () => <LoginPage />,
  },
  {
    path: "/student/:add",
    exact: false,
    main: ({match}) => <ActionManager match={match}/>
  },
  {
    path: "/sua",
    exact: false,
    main: () => <ChangeStudent />
  }
];
export { routes };
