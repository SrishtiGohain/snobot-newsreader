intent('What does this app do?', 'What can I do here?', 'What is this?',
      reply('This is Snobot. An Alan AI based conversational news project.'));
// intent('Start a command', (p) =>{
//     p.play({ command: 'testCommand'});
// })

const API_KEY = '6ed184a961d8486e97c3f24d5a974a0d';
let savedArticles = [];

//News by Source

// intent('Give me the news from $(source* (.*))', (p) => {
//     let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}';
//     
//     if(p.source.value) {
//         NEWS_API_URL= '${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}'
//     }
//     
//     api.request(NEWS_API_URL, (error, response, body) => {
//         const { articles } = JSON.parse(body);
//         
//         if(!articles.length) {
//             p.play('Sorry, no such source exists. Please try another source.');
//             return;
//         }
//         
//         savedArticles = articles;
//         
//         p.play({ command: 'newHeadlines', articles });
//         p.play('Here is the (latest|recent) ${p.source.value} news.');
//         
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here is the (latest|recent) ${p.source.value} news.`);
    });

})
