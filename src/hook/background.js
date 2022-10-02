import { useState, useEffect } from 'react';

export function useBackground(data, currentIconId) {
  console.log(data);
  const iconId = data?.list[0].weather[0].icon;

  const colors = {
    '01d': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    '01n': 'linear-gradient(to left, #536976, #292e49)',
    '02d': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
    '02n': 'linear-gradient(to left, #ffd89b, #19547b)',
    '03d': 'linear-gradient(to right, #00416a, #ebe8d8)',
    '03n': 'linear-gradient(to left, #606c88, #3f4c6b)',
    '04d': 'linear-gradient(to left, #141e30, #243b55)',
    '04n': 'linear-gradient(to left, #485563, #29323c)',
    '09d': 'linear-gradient(to top, #4b6cb7, #182848)',
    '09n': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    '10d': 'linear-gradient(to top, #076585, #fff)',
    '10n': 'linear-gradient(to top, #16222a, #3a6073)',
    '11d': 'linear-gradient(to right, #20002c, #cbb4d4);',
    '11n': 'linear-gradient(to right, #20002c, #cbb4d4);',
    '13d': 'linear-gradient(to right, #6190e8, #a7bfe8)',
    '13n': 'linear-gradient(to right, #6190e8, #a7bfe8)',
    '50d': 'linear-gradient(to left, #606c88, #3f4c6b)',
    '50n': 'linear-gradient(to left, #485563, #29323c)',
  };
  const [color, setColor] = useState(colors[currentIconId]);
  useEffect(() => setColor(colors[iconId] ?? colors[currentIconId]), [iconId, currentIconId])

  return color;

}