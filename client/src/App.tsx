import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Snackbar from "./components/Snackbar";
import AuthRoute from "./components/AuthRoute";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import { RootState } from "./store/types";
import theme from "./theme";

const mapStateToProps = (state: RootState) => ({
  initialized: state.auth.initialized
});

type Props = ReturnType<typeof mapStateToProps>;

export const App: React.FC<Props> = ({ initialized }) => {
  let content: React.ReactNode;

  if (!initialized) {
    content = <>Loading</>;
  } else {
    content = (
      <>
        <Snackbar />
        <Router>
          <Switch>
            <AuthRoute
              exact
              path="/"
              component={HomeView}
              redirectTo="/login"
              privateRoute={true}
            />
            <AuthRoute
              exact
              path="/login"
              component={LoginView}
              redirectTo="/"
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </>
    );
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </MuiThemeProvider>
  );
};

export default connect(mapStateToProps)(App);
