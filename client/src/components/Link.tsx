import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

interface LinkProps extends MuiLinkProps {
  to?: string;
}

const Link: React.FC<LinkProps> = props => (
  <MuiLink {...props} component={RouterLink as any} />
);

export default Link;
