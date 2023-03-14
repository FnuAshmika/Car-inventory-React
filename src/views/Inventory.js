import { useState } from "react";
import Counter from '../components/Counter';

export default function Inventory() {
    const [counters, setCounter] = useState([
        {
          title: '🚗 BMW counter',
          initialCount: 15
        },
        {
          title: '🚙 Honda Counter',
          initialCount: 25
        },
        {
          title: '🛻 Toyota Counter',
          initialCount: 12
        },
        {
          title: '🏎️ Porsche Counter',
          initialCount: 0
        }
    
      ])
      return (
        <div className="App">
          {
            counters.map((counter) => <Counter title={counter.title} initialCount={counter.initialCount}/>)
          }
        </div>
      );
}