import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropsTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDepartments } from '../reduxStore/modules/departments/actions';
import { getAllProducts } from '../reduxStore/modules/products/actions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F62F5E',
    },
  },
});

// console.log(theme);

/**
 * React class component
 */
class Layout extends React.Component {
  /**
   * Called immediately the Layout mounts
   * @returns {Function} a dispatch action
   */
  componentDidMount() {
    const { actions } = this.props;
    const allDepartments = () => actions.getDepartments();
    const allProducts = () => actions.getAllProducts();

    return Promise.all[(allDepartments(), allProducts())];
  }

  /**
   * React rendeer method
   * @returns {JSX.Element} The Themed Layout
   */
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropsTypes.element.isRequired,
  actions: PropsTypes.objectOf(PropsTypes.func).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getDepartments,
      getAllProducts,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(Layout);
