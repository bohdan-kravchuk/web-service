export const getAfter30Days = () => {
  const current = new Date();
  return current.setDate(current.getDate() + 30);
};
