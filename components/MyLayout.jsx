import Header from './Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const appTheme = createMuiTheme();
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = ( props ) => (
    <MuiThemeProvider theme={appTheme}>
        <div style={ layoutStyle }>
            <Header />
            { props.children }
        </div>
    </MuiThemeProvider>
);

export default Layout;