function twoSum(nums, target) {
    
    let numToIndex = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        
       
        if (numToIndex.hasOwnProperty(complement)) {
          
            return [numToIndex[complement], i];
        }
        
       
        numToIndex[num] = i;
    }

 
    return [];
}


console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
