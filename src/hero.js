export default function getHeroHealthLevel(heroData) {
  if (heroData.health > 50) {
    return 'healthy';
  }
  if (heroData.health >= 15 && heroData.health <= 50) {
    return 'wounded';
  }

  return 'critical';
}
