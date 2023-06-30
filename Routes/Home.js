import path from 'path';
import { pos } from '../index.js';
export const HomeRouter = app => {
  const options = {
    root: path.join('frontend'),
    pos,
  };
  app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <title>home</title>
        </head>
        <body>
            <h2>Welcome</h2>
            <div>
                <div id="map">
                    <iframe
                    id='iframemap'
                    width="100%"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"

                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${pos.lat},%20${pos.long}+(yo)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
        </body>
        <script>
            let prevPos = {
                long : 0,
                lat : 0
            }
            setInterval(()=>{
            axios.get('/pos').then(res =>{
                console.log("asked")
                console.log(res.data)
                if(prevPos.long !== res.data.long || prevPos.lat !== res.data.lat){
                    document.getElementById('map').innerHTML = "<iframe width=\\"100%\\" height=\\"600\\" frameborder=\\"0\\" scrolling=\\"no\\" marginheight=\\"0\\" marginwidth=\\"0\\" src=\\"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+ res.data.lat +",%20"+ res.data.long +"+(yo)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\\"></iframe>"
                    prevPos = {...res.data}
                }
            })},1000)
        </script>
        </html>
`);
  });
};
