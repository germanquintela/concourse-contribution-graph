import { motion } from 'framer-motion';
import { FadeInType } from './types';

const FadeIn = ({ children, delay = 0, duration = 0.4 }: FadeInType) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration,
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
