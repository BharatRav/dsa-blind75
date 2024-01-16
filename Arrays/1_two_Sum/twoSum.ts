function twoSum(nums: number[], target: number): number[] {
    const result:[number,number] =[0,0]
    const obj:{} = {}
    for(let i=0;i< nums.length;i++){
        if(obj[target-nums[i]]===undefined){
            obj[nums[i]]= i;
        } else {
            return [obj[target-nums[i]],i]
        }
    }
    return result;
};

//ignore export
export {}