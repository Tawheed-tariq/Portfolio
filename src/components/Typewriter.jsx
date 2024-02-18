import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0); //Keeps track of the index of the current text being displayed.
  const [currentText, setCurrentText] = useState(''); //Stores the text currently being typed out.
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); //Keeps track of the index of the current character being added to the currentText.

  useEffect(() => {
    //The useEffect hook is used to perform side effects in function components. 
    //In this case, it sets up an interval that executes a callback function every 
    //200 milliseconds (adjustable) to simulate typing. and a callback function which 
    //deletes the text character by character every 100 ms.


    const text = texts[currentIndex]; //text to be displayed
    const typingSpeed = 200; // Adjust typing speed here
    const deleteSpeed = 100; // Adjust deleting speed here
    const delay = isDeleting ? deleteSpeed : typingSpeed;

    const interval = setInterval(() => {
      if (isDeleting) { //if is deleteing the remove text character by character
        setCurrentText((prevText) => prevText.slice(0, -1)); // Remove the last character
      } else {
        setCurrentText((prevText) => prevText + text.charAt(index));
      }

      if (!isDeleting && index === text.length) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
      }

      setIndex((prevIndex) => (isDeleting ? prevIndex -1 : prevIndex + 1) );
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, index, isDeleting, texts]);

  return (
    <div className={`flex`}>
      <h2 className={`text-2xl font-semibold text-txt`}>I'm a </h2>
      <div className={`font-semibold decorate-text text-2xl ml-[10px]`}>{currentText}</div>
    </div>
    )
};

export default Typewriter;

