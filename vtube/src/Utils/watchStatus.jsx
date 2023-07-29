export const watchStatus = (watchLater, item) =>{
    if(watchLater.find((i)=> i._id === item._id)){
        return true;
    }else{
        return false;
    }
}