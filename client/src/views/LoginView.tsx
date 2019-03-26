import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LoginForm from "./../components/LoginForm";

const LoginView: React.FC<{}> = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6} xl={4}>
        <Paper elevation={1} style={{ padding: "2em", margin: "2em" }}>
          <Typography align="center" variant="h6">
            Log in
          </Typography>
          <LoginForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginView;
