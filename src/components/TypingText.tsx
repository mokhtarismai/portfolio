    import { useEffect, useState } from "react";
    import { motion } from "motion/react";

    interface TypingTextProps {
    text: string;
    className?: string;
    speed?: number;
    startDelay?: number;
    onComplete?: () => void;
    showCursor?: boolean;
    }

    const TypingText = ({
    text,
    className = "",
    speed = 30,
    startDelay = 0,
    onComplete,
    showCursor = true,
    }: TypingTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
            clearInterval(interval);
            setDone(true);
            onComplete?.();
        }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed, onComplete]);

    return (
        <span className={className}>
        {displayedText}
        {showCursor && started && !done && (
            <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
            />
        )}
        </span>
    );
    };

    export default TypingText;