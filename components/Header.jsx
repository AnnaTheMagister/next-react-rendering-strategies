import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const Header = () => (
    <AppBar position="static" color="default">
        <Toolbar variant="dense">
            <Link href="/">
                <Button variant="contained" color="primary">Home</Button>
            </Link>
        </Toolbar>
    </AppBar>
);

export default Header;