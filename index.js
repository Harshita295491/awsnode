const express= require('express');
const app= express();
app.use(express.json())

let items=[
    {
       "id":101,
       "producttype":"oil",
       "productname":"livon"
    },
    {
        "id":102,
        "producttype":"cream",
        "productname":"emolene"
     },
     {
        "id":103,
        "producttype":"serum",
        "productname":"niacinsmide"
     },
     {
        "id":104,
        "producttype":"powder",
        "productname":"compact"
     }
]


app.get('/items', (req, res)=>{
    res.send(items);
    console.log(items)

});
 













app.listen(3000, (err)=>{
    if(!err){
        console.log("server running on port 3000")

    }
    else{
        console.log("failed")
    }
})
