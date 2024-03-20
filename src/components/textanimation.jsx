// components/TextAnimation.js

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  "I'm an App Developer",
  "I'm a Web Developer",
  "I'm a ML Enthusiast",
];
const typingSpeed = 50; // Adjust the typing speed (milliseconds per character)

const TextAnimation = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedText === texts[currentTextIndex]) {
        clearInterval(interval); // Stop typing when the entire text is typed
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text after a delay
          setTypedText(""); // Reset typed text for the next text
        }, 1000); // Delay before moving to the next text
      } else {
        const nextCharacter = texts[currentTextIndex][typedText.length];
        setTypedText((prevTypedText) => prevTypedText + nextCharacter); // Append the next character to the typed text
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentTextIndex, typedText]);

  return (
    <div className="flex justify-start h-100vh items-center text-2xl md:text-4xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTextIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="block absolute"
        >
          {typedText}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextAnimation;
