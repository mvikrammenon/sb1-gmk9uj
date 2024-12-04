import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { createSequenceVariants } from './config';

const AnimationSequence = ({
  isVisible,
  children,
  config,
  containerStyle,
  onExitComplete
}) => {
  const variants = createSequenceVariants(config);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants.container}
          style={containerStyle}
        >
          {children(variants.item)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

AnimationSequence.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  config: PropTypes.shape({
    animation: PropTypes.oneOf(['slideDown', 'slideUp', 'fade']),
    timings: PropTypes.shape({
      staggerChildren: PropTypes.number,
      exitStaggerChildren: PropTypes.number,
      duration: PropTypes.number,
      exitDuration: PropTypes.number
    })
  }),
  containerStyle: PropTypes.object,
  onExitComplete: PropTypes.func
};

export default AnimationSequence;