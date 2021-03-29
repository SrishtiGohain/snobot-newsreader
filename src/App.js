import React, { useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
// import classes from '*.module.css';
import useStyles from './styles.js';

const alanKey = '4d7ee3fb90ff8cfb9d5ba63f543647072e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines'){
                   setNewsArticles(articles); 
                }
            }
        })
    }, [])


    return (
        <div>
            <h1>Snobot</h1>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles}/>
        </div>
    );
    
}

export default App;