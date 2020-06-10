const negativeIndex = (array)=>{
    if(!Array.isArray(array)){
        throw TypeError("Only arrays are supported");
    }
    const arrayHandler = {
        get(target, property) { 
        const index = Number(property)    
        if (index<0) {
            const realIndex = target.length+index;
            return target[realIndex];
          }
            return target[property];
        },
        set(target,property,value){
            const index = Number(property)
            if(index < 0) {
                const actualIndex = index + target.length;
                target.splice(actualIndex,1,value)
            }
            target.splice(index,1,value)
            return true;
        }
    };
    return new Proxy(array,arrayHandler)
}
 export { negativeIndex };
