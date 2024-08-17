// slider.js
import React, {useState} from 'react';
import './style.css'; // Import CSS for styling

const Index = ({items}) => {
    const itemsToShow = 3;
    const totalItems = items.length;

    // Calculate the total number of slides
    const totalSlides = Math.ceil(totalItems / itemsToShow);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    // Slice the items for the current slide
    const displayedItems = items.slice(currentIndex * itemsToShow, (currentIndex + 1) * itemsToShow);

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={handlePrev}>❮</button>
            <div className="slider-items">
                {displayedItems.map((item) => (
                    <div key={item.id} className="slider-item">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
            <button className="slider-button next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default Index;
