import { useState } from 'react';
import { Button } from './components/Button';
import { Typography } from './components/Typography';
import './App.css';

function App() {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handlePrimaryClick = () => {
    setClickedButton('Primary Button');
  };

  const handleSecondaryClick = () => {
    setClickedButton('Secondary Button');
  };

  return (
    <div className="app">
      <div className="section">
        <Typography as="h1" variant="large">Typography Variants</Typography>
        <div className="typography-examples">
          <Typography variant="small">Small text (10px)</Typography>
          <Typography variant="regular">Regular text (12px)</Typography>
          <Typography variant="large">Large text (16px)</Typography>
        </div>
      </div>

      <div className="section">
        <Typography as="h1" variant="large">Button Variants</Typography>
        <div className="button-examples">
          <Button variant="primary" onClick={handlePrimaryClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleSecondaryClick}>
            Secondary Button
          </Button>
        </div>
      </div>

      <div className="section">
        <Typography as="h1" variant="large">Last Button Clicked</Typography>
        <Typography variant="regular" className="result">
          {clickedButton || 'No button clicked yet'}
        </Typography>
      </div>
    </div>
  );
}

export default App;
