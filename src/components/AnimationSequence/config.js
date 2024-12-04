export const defaultTimings = {
  staggerChildren: 0.2,
  exitStaggerChildren: 0.1,
  duration: 0.3,
  exitDuration: 0.2
};

export const defaultAnimations = {
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export const createSequenceVariants = (config = {}) => {
  const timings = { ...defaultTimings, ...config.timings };
  
  return {
    container: {
      hidden: {
        transition: {
          when: "afterChildren",
          staggerChildren: timings.exitStaggerChildren,
          staggerDirection: -1,
          duration: timings.exitDuration
        }
      },
      visible: {
        transition: {
          when: "beforeChildren",
          staggerChildren: timings.staggerChildren,
          duration: timings.duration
        }
      }
    },
    item: {
      hidden: {
        ...defaultAnimations[config.animation || 'slideDown'].hidden,
        transition: { duration: timings.exitDuration }
      },
      visible: {
        ...defaultAnimations[config.animation || 'slideDown'].visible,
        transition: { duration: timings.duration }
      }
    }
  };
};