import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#173e43" },
    secondary: { main: "#3fb0ac" },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;