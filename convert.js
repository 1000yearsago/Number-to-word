const arr=[1,2,5,9,4]

function convert(arr){
    const str=['zero','one','two','three','four','five','six','seven','eight','nine']
    let num
    for(let i=0;i<arr.length;i++){
        num=arr[i]
        arr[i]=str[num]
    }
}

convert(arr)

console.log(arr)
