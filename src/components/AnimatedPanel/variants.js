export const panelVariants = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

export const dropdownVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export const buttonVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};