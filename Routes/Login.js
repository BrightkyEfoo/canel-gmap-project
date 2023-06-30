import path from 'path'
import { PORT } from '../index.js';

const UserName = "test"
const Password = "test"


export const LoginController = (app)=> {
    const options = {
        root: path.join('frontend')
    };
    app.post('/login',(req,res)=>{
        // const {username , password} = req.body
        console.log('req.body', req.body)
        if(req.body?.username === UserName && req.body?.password === Password){
            console.log('logged successfully')
            res.redirect(`https://canel-gmap.onrender.com`)
        }else{
            console.log('error')
        }
    })

    app.get('/login',(req,res)=>{
        res.sendFile('login.html',options)
    })
}