import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route
} from "react-router-dom";
import CountriesList from "./CountriesList";
import CountriesDetails from './CountriesDetails';

export default function Router() {
  const routeConfig = [
    {
      path: "/",
      component: CountriesList,
      exact: true,
    },
    {
      path: "/details/:id",
      component: CountriesDetails,
      exact: true,
    }
  ];
  return (
    <ReactRouter>
      <Switch>
        {routeConfig.map((routeItem) =>
           (
            <Route
              path={routeItem.path}
              exact={routeItem.exact}
              key={routeItem.path}
            >
                {<routeItem.component />}
            </Route>
          )
        )}
      </Switch>
    </ReactRouter>
  );
}
