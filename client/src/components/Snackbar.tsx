import React from "react";
import { connect } from "react-redux";
import MuiSnackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import { SnackbarType } from "../store/snackbar/types";
import { RootState } from "../store/types";
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    [SnackbarType.Success]: {
      backgroundColor: green[600]
    },
    [SnackbarType.Warning]: {
      backgroundColor: amber[700]
    },
    [SnackbarType.Error]: {
      backgroundColor: theme.palette.error.dark
    }
  });

const mapStateToProps = (state: RootState) => ({
  snacks: state.snackbar
});

type Props = ReturnType<typeof mapStateToProps> & WithStyles<typeof styles>;

const Snackbar: React.FC<Props> = ({ snacks, classes }) => {
  return (
    <>
      {snacks.map((snack, index) => (
        <MuiSnackbar
          key={index}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={true}
          onClose={() => null}
          action={[
            <IconButton color="inherit" onClick={() => alert("ok")}>
              <CloseIcon />
            </IconButton>
          ]}
          ContentProps={{ className: classes[snack.type] }}
          message={snack.message}
        />
      ))}
    </>
  );
};

export default connect(mapStateToProps)(withStyles(styles)(Snackbar));
