export default function anim(variants)
{
      return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
      }
}
// --------------ANIMATIONS

export const fade = {
      initial: {
            opacity: 0
      },
      enter: {
            opacity: 1

      },
      exit: {
            opacity: 0,
            transition: {
                  duration: 1
            }
      }
}


export const image_down = {
      initial: {
            height: "100px"
      },
      enter: {
            opacity: 1,
            height: "140px",
            opacity: 0.7

      },
      exit: {
            opacity: 0,
            height: "100px",

            transition: {
                  duration: 1.4
            }
      }
}

export const slides = {
      initial: {
            top: "100vh",
      },
      enter: {
            top: "100vh",
      },
      exit: {
            top: "0",
            transition: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1]
            }
      }
}

export const paspective = {
      initial: {
            y: 0,
            scale: 1,
            opacity: 1
      },
      enter: {
            y: 0,
            scale: 1,
            opacity: 1

      },
      exit: {
            y: -100,
            scale: 0.9,
            opacity: 0.5,

            transition: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1]
            }
      }
}


export const text_in = (dir) =>
{

      return {
            initial: {
                  x: 100,

            },
            enter: {
                  x: 0,
                  scale: 1,
                  opacity: 1

            },
            exit: {
                  x: -100,
                  skew: 20,
                  transition: {
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1]
                  }
            }
      }
}


export const nav_sheet = (i) =>
{

      return {
            initial: { x: "calc(100% + 200px)" },
            enter: {
                  x: 0,

                  transition: {
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1]
                  }

            },
            exit: { x: "calc(100% + 200px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
      }
}


export const text_up_in = {
      initial: {
            y: 80,
            // opacity: 1
      },
      enter: {
            y: 0,
            // scale: 1,
            // opacity: 1

      },
      exit: {
            y: -80,
            // scale: 0.9,
            // opacity: 0.5,

            transition: {
                  duration: 2.5,
                  delay: 1.5,
                  ease: [0.76, 0, 0.24, 1]
            }
      }
}
