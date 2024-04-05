export const scale_in_onview = {
      initial: {
            opacity: "0",
            scale: 0
      },
      enter: {
            opacity: 1,
            scale: 1,
            transition: {
                  duration: 0.9,
                  ease: "easeInOut"
            }
      },
      exit: {
            opacity: 0,
            scale: 0.7,
            transition: {
                  duration: 0.9,
                  ease: "easeInOut"
            }
      },
}