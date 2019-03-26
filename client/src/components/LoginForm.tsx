import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "./Link";
import { login } from "../store/auth/actions";
import { addSnackbar } from "../store/snackbar/actions";
import { SnackbarType } from "../store/snackbar/types";
import { RootState } from "../store/types";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading
});

const requestLogin = login.request;

const dispatchToProps = {
  addSnackbar,
  requestLogin
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchToProps;

const LoginForm: React.FC<Props> = ({ requestLogin, loading, addSnackbar }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm }) => {
        addSnackbar({
          message: `Authenticating with email: ${values.email}`,
          type: SnackbarType.Success
        });
        requestLogin(values);
        resetForm();
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "1em" }}>
              <Field
                name="email"
                render={({ field }: { field: any }) => (
                  <TextField
                    type="email"
                    variant="standard"
                    placeholder="Email"
                    label="Email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "1em" }}>
              <Field
                name="password"
                render={({ field }: { field: any }) => (
                  <TextField
                    type="password"
                    variant="standard"
                    placeholder="Password"
                    label="Password"
                    fullWidth
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "2em" }}>
              <Link variant="body1" to="/">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
                style={{ marginBottom: "1em" }}
              >
                Log in
              </Button>
              <Button variant="text" color="default" fullWidth size="large">
                Create Account
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(LoginForm);
