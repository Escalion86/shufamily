import { motion } from 'framer-motion'

const TextLine = ({ text, delay, isVisible, big }) => {
  // const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsVisible(false), 16000)
  // }, [])

  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 1,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        height: isVisible ? 32 : 1,
      }}
      transition={{
        // duration: 1,
        // delay: 4,
        opacity: {
          duration: 1,
          delay: isVisible ? delay : 0, // custom duration for opacity property only
        },
        height: {
          duration: 1,
          delay: isVisible ? delay : 0, // custom duration for opacity property only
        },
      }}
      className={'whitespace-nowrap' + (big ? ' scale-125' : '')}
    >
      {text}
    </motion.div>
  )
}

export default TextLine
