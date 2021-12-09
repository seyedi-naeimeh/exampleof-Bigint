const MAX_SAFE_INTEGER = 9007199254740991n

function findMaxSafeBigint() {
    try{
        let mixed=[]
        for(let value of arguments ){
            
            if(typeof value==="string" && typeof arguments ==="number" && value<= MAX_SAFE_INTEGER){
                const bigintFromNumber=BigInt(value);
                mixed.push(bigintFromNumber);
                
            }
            else if(typeof value === 'number' && value<=MAX_SAFE_INTEGER) {
                const bigintFromNumber=BigInt(value)
                mixed.push(bigintFromNumber)
            }
            else if(typeof value==="bigint"){
                mixed.push(value)

            }
            
            else if(value>MAX_SAFE_INTEGER){
                throw new ReferenceError
            }
            else if(value===""){
                throw "Big Error"
            }
            else if(value%1 !==0){
                throw new RangeError 
            }
        }

        if(arguments.length===0){
            return null
        }
        
        mixed.sort((a, b) => (a > b) ? -1 : ((a < b) ? 1 : 0))
        return mixed[0]

    }
    catch (error) { 
       if (error instanceof RangeError){
        return "Big Error"
       }
       if (error instanceof ReferenceError){
        return "Big Error"
       }
       
    }
    

    
}
//console.log(findMaxSafeBigint(""))
//console.log(findMaxSafeBigint(10 - 12, 10 - 10, 10 - 11))
//console.log(findMaxSafeBigint("10"/3))
//console.log(findMaxSafeBigint())
console.log(findMaxSafeBigint("10"/2,2n,"20"/5,12-8))
//console.log(findMaxSafeBigint(2**53))
