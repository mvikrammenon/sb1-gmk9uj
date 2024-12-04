import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedButton = ({ onClick, children, variants }) => {
  return (
    <motion.button
      variants={variants}
      style={{
        padding: '0.5rem 1.5rem',
        backgroundColor: '#4fd1c5',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem'
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

AnimatedButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variants: PropTypes.object
};

export default AnimatedButton;