/* eslint-disable react/react-in-jsx-scope */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Props } from "../_interface/BasicProps";

export const AnimateDiv = (props: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])
    return (
        <div ref={ref} style={{overflow:"hidden"}}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }

            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className={props.className ? props.className : ""}
            >
                {props.children}
            </motion.div>
        </div>
    )
}