
import  express, { Request, Response} from "express";

const app = express();
const port: number = 8000;




//Endpoint to fetch user details
app.get('/user/Id/:id/Name/:name', (req:Request, res:Response)=>{
//   let queryParam = req.query;
//   console.log(queryParam);
//   res.json(queryParam)
    res.send({
        message: 'Hello World',
        data:req.params.id,
        name:req.params.name
    })
  
})

// Endpoint to post data
app.post('/user/Id/:id/Name/:name', (req:Request, res:Response) =>{
    res.send({
        data: req.body,
        params:{
            id: req.params.id,
            name: req.params.name
        }
    })
})


app.put('/user/Id/:id/Name/:name', (req:Request, res:Response)=>{
    res.send({
        data: req.body,
        params:{
            id: req.params.id,
            name: req.params.name
        }
    })
})

app.delete('/user/Id/:id/Name/:name', (req:Request, res:Response)=>{
    res.send({})
})


app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`)
});



