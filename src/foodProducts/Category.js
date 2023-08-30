import React, { useState } from 'react';

const Category=()=> {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const renderButtons = () => {
    const buttonData = [
      'View all',
      'Category one',
      'Category two',
      'Category three',
      'Category four',
      // Add more buttons as needed
    ];

    return buttonData.map((buttonText, index) => (
      <button
        key={index}
        className={`button ${activeButton === index ? 'active' : ''}`}
        onClick={() => handleButtonClick(index)}
      >
        {buttonText}
      </button>
    ));
  };

  return (
    <div>
      <div className="button-row">{renderButtons()}</div>
    </div>
  );
}

export default Category;

