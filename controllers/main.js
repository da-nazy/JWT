const login=async(req,res)=>{
    const {username,password}=req.body;
    // mongo
    //joi
    //
    
    res.send('Fake Login/Register/Signup Route')
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100);
    res.status(200).json(({msg:'Hello!, John Doe',secret:`Here is your authorized data, your lucky number ${luckyNumber} `}))
}

module.exports={
   login,dashboard 
}