function twoSum(nums, target) {
    var result = [0, 0];
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] === undefined) {
            obj[nums[i]] = i;
        }
        else {
            return [obj[target - nums[i]], i];
        }
    }
    return result;
}
;
