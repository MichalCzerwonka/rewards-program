// Delay function to simulate API response
export const delay = (timeout = 500) =>
  new Promise((res) => setTimeout(() => res(), timeout));