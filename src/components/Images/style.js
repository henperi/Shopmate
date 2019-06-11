import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topLeft: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(2),
  },
  topRight: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  bottomRight: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
  },
  bottomLeft: {
    position: 'absolute',
    bottom: theme.spacing(1),
    left: theme.spacing(2),
  },
  center: {
    position: 'absolute',
    textAlign: 'center',
  },
}));

export default useStyles;
