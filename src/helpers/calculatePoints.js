const FIRST_CONDITION = 50;
const SECOND_CONDITION = 100;
const FIRST_CONDITION_REWARD = 1;
const SECOND_CONDITION_REWARD = 2;

export const calculatePoints = (amount) => {
  const roundedAmount = Math.floor(amount)

  if (roundedAmount < FIRST_CONDITION) {
    return 0
  }

  if (roundedAmount >= FIRST_CONDITION && roundedAmount < SECOND_CONDITION) {
    return (roundedAmount - FIRST_CONDITION) * FIRST_CONDITION_REWARD;
  }

  return ((SECOND_CONDITION - FIRST_CONDITION) * FIRST_CONDITION_REWARD) +
    ((roundedAmount - SECOND_CONDITION) * SECOND_CONDITION_REWARD);
}