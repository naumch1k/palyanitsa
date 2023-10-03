import { useState, useEffect } from 'react';

function useProgressBar(totalItems, currentProgress) {
  const [completedPercentage, setCompletedPercentage] = useState(0);

  useEffect(() => {
    const progressBarStep = 100 / totalItems;
    const calculatedProgress = (1 + currentProgress) * progressBarStep;
    setCompletedPercentage(calculatedProgress);
  }, [totalItems, currentProgress]);

  return completedPercentage;
};

export default useProgressBar;
