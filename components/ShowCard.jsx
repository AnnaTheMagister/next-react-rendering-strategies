import { Card, CardMedia, CardHeader, CardContent, IconButton, CardActions, Button } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import VideocamIcon from '@material-ui/icons/Videocam';
import ReactHtmlParser from 'react-html-parser';

const ShowCard = ( props ) => {
    const { show } = props;
    const imgSrc = show.image && show.image.medium || '/no-photo.png';
    const handleExpandClick = ( info ) => () => window.open( info._links.previousepisode.href );
    return ( <Card style={ { width: 300, margin: 20 } }>
        <CardHeader
            action={
                <IconButton
                    aria-label="see"
                    onClick={ handleExpandClick( show ) }
                >
                    <OpenInNewIcon />
                </IconButton>
            }
            title={ show.name }
            subheader={ show.type }
        />
        <CardMedia
            style={ { height: 200 } }
            image={ imgSrc }
            title={ show.name }
        />
        <CardContent>
            <div style={ { height: 150, overflow: 'hidden' } }>
                { ReactHtmlParser( show.summary ) }
            </div>
        </CardContent>
        <CardActions>
            <Button size="small" color="secondary" variant="outlined">
                Share
            </Button>
            <Button size="small" color="secondary" variant="contained">
                <VideocamIcon />
                {' '}
                Watch Video
            </Button>
        </CardActions>
    </Card> );
};

export default ShowCard;