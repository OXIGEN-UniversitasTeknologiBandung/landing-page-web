import { useState, useEffect } from 'react';

export default function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 45, pauseDuration = 1800) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;
        const currentWord = words[index];
        let timeout;

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
        } else if (!isDeleting && text.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration]);

    return text;
}