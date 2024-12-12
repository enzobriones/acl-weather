const getCurrentDate = (): string => {
  const currentDate = new Date();
  return currentDate.toISOString();
};

const getEndDate = (): string => {
  const currentDate = new Date();
  const endDate = new Date(currentDate.getTime() * 60 * 60 * 1000);
  return endDate.toISOString();
};