import { CounterProvider } from './assets/components/CounterContext';
import Counter from './assets/components/contador';

 export default function App() {
      return (
        <CounterProvider>
          <Counter />
        </CounterProvider>
      );
    }