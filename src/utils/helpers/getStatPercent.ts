import { MAXSTATS } from '@constants';
import { statPercentReturn, statReturn } from '@types';

export const getStatPercent = (stats: statReturn): statPercentReturn => {
  const hpPercent = Math.ceil(100 / (MAXSTATS.maxHp / stats.hp));
  const attackPercent = Math.ceil(100 / (MAXSTATS.maxAttack / stats.attack));
  const defencePercent = Math.ceil(100 / (MAXSTATS.maxDefence / stats.defence));
  const spAttackPercent = Math.ceil(100 / (MAXSTATS.maxSpeciesAttack / stats.spAttack));
  const spDefencePercent = Math.ceil(100 / (MAXSTATS.maxSpeciesDefence / stats.spDefence));
  const speedPercent = Math.ceil(100 / (MAXSTATS.maxDefence / stats.defence));

  return {
    hpPercent,
    attackPercent,
    defencePercent,
    spAttackPercent,
    spDefencePercent,
    speedPercent
  };
};
