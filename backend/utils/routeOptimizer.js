const optimizeRoute = (locations) => {
  // Mock route optimization logic
  return locations.sort(() => Math.random() - 0.5);
};

module.exports = { optimizeRoute };