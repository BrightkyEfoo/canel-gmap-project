import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { LoginController } from './Routes/Login.js';
import { HomeRouter } from './Routes/Home.js';
import path from 'path';
// import frameguard from 'frameguard'
// import helmet from 'helmet'

export const PORT = process.env.PORT || 9000;
export const pos = {
  long: 10,
  lat: 5,
};
const setPos = (lon, lat) => {
  (pos.long = lon), (pos.lat = lat);
};
const app = express();
// app.use(frameguard({ action: "SAMEORIGIN" }));

// app.use(helmet({
//     contentSecurityPolicy: {
//       directives: {
//         frameAncestors: [
//           'https://*'
//         ]
//       }
//     },
//     frameguard: false
//   }))

app.set('view engine', 'pug');
app.set('views', path.join('frontend'));

app
  .use(
    cors({
      origin: '*',
    })
  )
  .use('/public', express.static('./public'))
  .use(morgan('dev'))
  .use(express.json());

LoginController(app);
HomeRouter(app);
app.post('/changePos', (req, res) => {
  if (req.body?.lon != undefined && req.body?.lat != undefined) {
    setPos(req.body.lon, req.body.lat);
  }
  res.json({ msg: 'success' });
});

app.get('/pos',(req,res)=>{
    res.json({
        ...pos
    })
})

app.listen(PORT, () => {
  console.log(`our sever started successfully on port ${PORT}`);
});
