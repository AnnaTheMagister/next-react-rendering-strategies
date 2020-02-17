import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const Header = () => (
    <AppBar position="static" color="default">
        <Toolbar variant="dense">
            <Link href="/">
                <Button variant="outlined" color="primary">SSR</Button>
            </Link>
            <Link href="/client-side-rendering">
                <Button variant="outlined" color="primary">CSR</Button>
            </Link>
            <Link href="/quotes">
                <Button variant="outlined" color="primary">Quotes</Button>
            </Link>
        </Toolbar>
    </AppBar>
);

export default Header;