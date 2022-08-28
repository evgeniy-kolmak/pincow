export function useDate() {
  const date = new Date();

  const dateString = date.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const month = date.getMonth() + 1;


  const getSeason = month => {

    if (3 <= month && month <= 5) {
      return 'spring';
    }

    if (6 <= month && month <= 8) {
      return 'summer';
    }

    if (9 <= month && month <= 11) {
      return 'autumn';
    }

    return 'winter';
  }



  return {
    month,
    currentDateString: dateString,
    season: getSeason(month),

  }
}