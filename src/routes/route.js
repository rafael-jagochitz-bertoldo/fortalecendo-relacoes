import { useState } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ page: Page }) => {
    const [isPrivate] = useState(false)
  return (
    <ReactDOMRoute
      render={() => {
        return !isPrivate ? (
          <Page />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route