export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-5vh",
  },
  initial2: {
    opacity: 0,
    y: "+5vh",
  },
  in: {
    y: "0vh",
    opacity: 1,
    transition: { delay: 0, duration: 1}
  },
  in2: {
    y: "0vh",
    opacity: 1,
    transition: { delay: 1, duration: 1}
  },
  out: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: .5}
  },
}