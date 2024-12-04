import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Header = ({ isOpen, onClick }) => {
  return (
    <motion.div
      className="header"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      initial={{ borderRadius: '8px' }}
      animate={{ borderRadius: isOpen ? '8px 8px 0 0' : '8px' }}
    >
      <h2>Change your mind? Edit your selections.</h2>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        style={{ color: '#2d3748' }}
      >
        <path
          fill="currentColor"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </motion.svg>
    </motion.div>
  );
};

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Header;