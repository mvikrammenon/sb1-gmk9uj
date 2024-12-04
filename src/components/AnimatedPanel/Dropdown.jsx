import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Dropdown = ({ label, value, options, variants, custom }) => {
  return (
    <motion.div
      variants={variants}
      custom={custom}
      className="dropdown"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}
    >
      <label style={{ 
        width: '100px', 
        color: '#fff',
        fontSize: '0.9rem'
      }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => console.log(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: 'white',
          fontSize: '0.9rem'
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </motion.div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  variants: PropTypes.object,
  custom: PropTypes.number
};

export default Dropdown;