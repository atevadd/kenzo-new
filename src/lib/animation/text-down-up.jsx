export const text_down_up = {
      initial: {
            y: "100%",
      },
      enter: (i) =>
      {
            return {
                  y: "0%",
                  transition: {
                        duration: 0.5,
                        delay: 0.01 * i
                  }
            }
      },
      exit: {
            y: "100%",
            transition: {
                  duration: 0.5,
            }
      },
}