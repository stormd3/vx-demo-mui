import Home from './home';

import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withRoot from 'docs/src/modules/components/withRoot';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '100vh', // Makes the hero full height until we get some more content.
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.primary[800],
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 16,
    },
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    maxWidth: 500,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  logo: {
    margin: '20px 0',
    width: '100%',
    height: '40vw',
    maxHeight: 230,
  },
});

export default compose(withRoot, withStyles(styles))(Home);
//export default Home;
