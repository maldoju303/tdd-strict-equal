const sumAll = (nums) => {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
  }
  return sum
}

module.exports = sumAll
