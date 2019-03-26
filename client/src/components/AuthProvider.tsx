import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initSystem } from "../store/system/actions";
import { RootState } from "../store/types";

const mapDispatch = {
  initSystem: initSystem.request
};

const mapState = (state: RootState) => ({
  initialized: state.system.initialized
});

type Props = typeof mapDispatch & ReturnType<typeof mapState>;

const AuthProvider: React.FC<Props> = ({
  initSystem,
  children,
  initialized
}) => {
  useEffect(() => {
    if (!initialized) {
      initSystem();
    }
  });
  return initialized ? <>{children}</> : <span>Loading</span>;
};

export default connect(
  mapState,
  mapDispatch
)(AuthProvider);
