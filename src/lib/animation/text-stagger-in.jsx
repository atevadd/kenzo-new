export const text_fade_in_stg = {
      initial: {
            opacity: 0

      },
      enter: (i) =>
      {
            return {
                  opacity: 1,
                  transition: {
                        duration: 0.5,
                        delay: 0.1 * i
                  }
            }
      },
      exit: {
            opacity: 0,
            transition: {
                  duration: 0.5,
            }
      },
}