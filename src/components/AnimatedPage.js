import { motion } from 'framer-motion'

const AnimatedPage = (props) => {
    const {children} = props

    const animation = {
        initial: { opacity: 0 },
        animate: { opacity: 1},
        exit: { opacity: 0}
    }
    return (
        <motion.div variants={animation} initial='initial' animate='animate' exit='exit' transition={{duration:0.5,easeInOut: [0.17, 0.67, 0.83, 0.67]}}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage 