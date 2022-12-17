// it is not easy but GFG has placed in easy section in arrays
// Find triplets with zero sum

const isPairSum = function(arr, start,end,target){
    let s = start;
    let e = end -1;
    while(s<e){
        if(arr[s] + arr[e] == target) return 1;            
        else if(arr[s] + arr[e] < target ) s++;
        else  e-- ;           
    }
    return 0;
}

class Solution {
    //Function to find triplets with zero sum.    
    findTriplets(arr, n){
        //your code here
        arr.sort((a,b) => a-b);
        for(let i=0;i<n; i++){
        if(isPairSum(arr,i+1,n,0-arr[i])) return 1;
        }
        return 0;        
    }
}
