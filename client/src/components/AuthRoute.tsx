import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../store/types";

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.token !== null
});

type Props = React.ComponentProps<typeof Route> & {
  component: React.ComponentType;
  isAuthenticated: boolean;
  redirectTo: string;
  privateRoute?: boolean;
} & ReturnType<typeof mapStateToProps>;

const AuthRoute: React.FC<Props> = ({
  redirectTo,
  component: Component,
  isAuthenticated,
  render,
  privateRoute = false,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={props => {
        return privateRoute === isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        );
      }}
    />
  );
};

export default connect(mapStateToProps)(AuthRoute);
