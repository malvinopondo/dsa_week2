function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    // If no such pair is found, return an empty array or handle as per requirements
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9));   // Output: [0, 1] (because 2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2] (because 2 + 4 = 6)
