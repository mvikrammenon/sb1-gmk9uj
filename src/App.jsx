import AnimatedPanel from './components/AnimatedPanel/AnimatedPanel';
import './App.css';

const dropdownsData = [
  {
    label: 'You want to',
    value: 'Review pricing and deployment',
    options: ['Review pricing and deployment', 'Deploy application', 'Configure settings']
  },
  {
    label: 'for',
    value: 'NX and Solid Edge',
    options: ['NX and Solid Edge', 'AutoCAD', 'Fusion 360']
  },
  {
    label: 'as a',
    value: 'Startup',
    options: ['Startup', 'Enterprise', 'Individual']
  }
];

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <AnimatedPanel dropdowns={dropdownsData} />
    </div>
  );
}

export default App;