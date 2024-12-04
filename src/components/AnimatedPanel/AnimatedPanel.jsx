import { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import AnimatedButton from './AnimatedButton';
import Header from './Header';
import AnimationSequence from '../AnimationSequence/AnimationSequence';

const AnimatedPanel = ({ dropdowns }) => {
  const [isOpen, setIsOpen] = useState(false);

  const panelConfig = {
    animation: 'slideDown',
    timings: {
      staggerChildren: 0.2,
      duration: 0.3
    }
  };

  const buttonConfig = {
    animation: 'slideUp',
    timings: {
      duration: 0.3,
      staggerChildren: 0
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimationSequence
        isVisible={isOpen}
        config={panelConfig}
        containerStyle={{
          backgroundColor: '#4a5568',
          padding: '2rem',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden'
        }}
      >
        {(itemVariants) => (
          <>
            <div style={{ marginBottom: '2rem' }}>
              {dropdowns.map((dropdown, index) => (
                <Dropdown
                  key={index}
                  {...dropdown}
                  variants={itemVariants}
                  custom={index}
                />
              ))}
            </div>
            <AnimationSequence
              isVisible={true}
              config={buttonConfig}
              containerStyle={{ float: 'right' }}
            >
              {(buttonVariants) => (
                <AnimatedButton
                  variants={buttonVariants}
                  onClick={() => console.log('Update clicked!')}
                >
                  Update
                </AnimatedButton>
              )}
            </AnimationSequence>
          </>
        )}
      </AnimationSequence>
    </div>
  );
};

AnimatedPanel.propTypes = {
  dropdowns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default AnimatedPanel;