import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const LinkRouter = props => <Link {...props} component={RouterLink} />;

export default LinkRouter;
