const formatStat = (stat) =>
  stat >= 1000 ? `${Math.round(stat / 100) / 10}k` : `${stat}`;

export default formatStat;
