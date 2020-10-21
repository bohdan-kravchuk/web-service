export const fromUserToUserClient = user => {
  const { _id, fullName, email, isAdmin, counters } = user;
  return { _id, fullName, email, isAdmin, counters };
};
