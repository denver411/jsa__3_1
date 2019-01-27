export default function getHealthStatus(heroInfo) {
  const { health } = heroInfo;
  let healthStatus = 'critical';
  if (health >= 15) {
    healthStatus = 'wounded';
  }
  if (health >= 50) {
    healthStatus = 'healthy';
  }
  return healthStatus;
}
