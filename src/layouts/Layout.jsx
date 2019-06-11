import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropsTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F62F5E',
    },
  },
});

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropsTypes.element.isRequired,
};
export default Layout;
