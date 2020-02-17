import { Typography, Card, CardMedia, CardHeader, CardContent } from "@material-ui/core";
import ReactHtmlParser from 'react-html-parser';

const ShowCard = ( props ) => {
    const { showInfo } = props;
    const imgSrc = showInfo.show.image && showInfo.show.image.medium || 'https://st.kp.yandex.net/images/film_iphone/iphone360_916498.jpg';
    return ( <Card style={ { width: 300, margin: 20 } }>
        <CardHeader>
        </CardHeader>
        <CardMedia
            style={ { height: 200 } }
            image={ imgSrc }
            title={ showInfo.show.name }
        />
        <CardContent>
            <Typography variant="h4">{ showInfo.show.name }</Typography>
            <Typography variant="body2">
                {ReactHtmlParser(showInfo.show.summary)}
            </Typography>
        </CardContent>
        <pre>
            <code>{ JSON.stringify( showInfo.show, null, 2 ) }</code>
        </pre>
    </Card> );
};

export default ShowCard;