import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1a237e" },
    secondary: { main: "#d81b60" },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;