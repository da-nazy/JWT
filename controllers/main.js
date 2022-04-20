const CustomApiError=require('../errors/custom-error');
const login=async(req,res)=>{
    const {username,password}=req.body;
    // mongo validation 
    //joi
    //check in the controller
    if(!username||!password){
       throw new CustomApiError('Please provide email and password',400)
    }
    res.send('Fake Login/Register/Signup Route')
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100);
    res.status(200).json(({msg:'Hello!, John Doe',secret:`Here is your authorized data, your lucky number ${luckyNumber} `}))
}

module.exports={
   login,dashboard 
}