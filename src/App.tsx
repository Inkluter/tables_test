import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import { getRandomTables } from './utils/getRandomTables';
import { setRandomWarnings } from './utils/setRandomWarnings';
import { Table } from './tables/types';
import { MemoTableView } from './components/TableView';
import { TopBar } from './components/TopBar';

// animationDuration should be the same as the CSS animation duration
const ANIMATION_DURATION = 1500;
const REGEN_INTERVAL = {
  min: 5000,
  max: 10000,
}

const App = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [isWarningActive, setIsWarningActive] = useState(true);

  const regenerateTables = () => {
    const currentTime = document.timeline.currentTime;
      
      if (currentTime !== null) {
        const remainder = Number(currentTime) % ANIMATION_DURATION;
        const delay = remainder === 0 ? 0 : ANIMATION_DURATION - remainder;

        // 1. turn off warning state on delay
        // 2. set random warnings
        // 3. set the warning state to true and run animation again
        setTimeout(() => {
          setIsWarningActive(false);
          setTables((tables) => setRandomWarnings(tables));
          setTimeout(() => setIsWarningActive(true), 0);

          setTimeout(regenerateTables, faker.number.int(REGEN_INTERVAL));
        }, delay);
      }
  }

  useEffect(() => {
    setTables(getRandomTables(1000));

    setTimeout(regenerateTables, faker.number.int(REGEN_INTERVAL));
  }, []);

  return (
    <>
      <TopBar />

      <div className="content">
        {tables.map((table) => (
          <MemoTableView
            key={table.id}
            id={table.id}
            name={table.name}
            type={table.type}
            warning={table.warning}
            guests={table.guests}
            maxGuests={table.maxGuests} 
            isWarningActive={isWarningActive}
          />
        ))}
      </div>
    </>
  );
};

export default App;
