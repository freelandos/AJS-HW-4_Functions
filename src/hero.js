export default function getHeroHealthLevel(heroData) {
  let healthLevel = '';

  if (heroData.health > 50) {
    healthLevel = 'healthy';
  }
  if (heroData.health >= 15 && heroData.health <= 50) {
    healthLevel = 'wounded';
  }
  if (heroData.health < 15) {
    healthLevel = 'critical';
  }

  return healthLevel;
}
