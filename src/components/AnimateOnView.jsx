import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const orchestrate = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: .05,
        }
    }
}


export const AnimateOnView = (props) => {
    const { threshold } = props;
    const animControls = useAnimation();
    const { ref, inView } = useInView({
        threshold: threshold ? threshold : .8
    });

    useEffect(() => {
        if (inView) {
            animControls.start("visible");
        }
    }, [animControls, inView]);

    return (
        <motion.div {...props} initial="hidden" animate={animControls} variants={orchestrate} ref={ref}>
            {props.children}
        </motion.div>
    );

};