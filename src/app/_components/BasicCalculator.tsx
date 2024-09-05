"use client";

import React, { useEffect, useState } from "react";

interface BasicCalculatorProps {
  description: string;
  inputDescription: string;
  outputDescription: string;
  initialRatio: number;
  initialSellPrice: number;
}

const BasicCalculator = ({
  description,
  inputDescription,
  outputDescription,
  initialRatio,
  initialSellPrice,
}: BasicCalculatorProps) => {
  const [inputValue, setInputValue] = useState<string>(initialRatio.toString()); // Allow input to be string to handle empty state
  const [outputValue, setOutputValue] = useState<string>("1"); // Default output to 1 initially
  const [ratioValue, setRatioValue] = useState<string>(initialRatio.toString());
  const [sellPriceSum, setSellPriceSum] = useState<string>(
    initialSellPrice.toString()
  ); // This will be the sell price sum the user can input/edit

  // Function to round a value down to the nearest multiple
  const roundToMultiple = (value: number, multiple: number) => {
    return Math.max(0, Math.floor(value / multiple) * multiple); // Ensure no negative values
  };

  const calculateOutput = (input: number, ratio: number) => {
    return roundToMultiple(input / ratio, 1);
  };

  const calculateInput = (output: number, ratio: number) => {
    return roundToMultiple(output * ratio, initialRatio);
  };

  // When the input value changes, calculate the output value
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleInputBlur = () => {
    const parsedInputValue = parseFloat(inputValue);
    if (!isNaN(parsedInputValue)) {
      const newOutput = calculateOutput(parsedInputValue, parseFloat(ratioValue));
      setOutputValue(newOutput.toString());
      setSellPriceSum((newOutput * initialSellPrice).toString()); // Update sell price sum based on new output
    } else {
      setInputValue("0");
    }
  };

  // When the output value changes, calculate the input value
  const handleOutputChange = (value: string) => {
    setOutputValue(value);
  };

  const handleOutputBlur = () => {
    const parsedOutputValue = parseFloat(outputValue);
    if (!isNaN(parsedOutputValue)) {
      const newInput = calculateInput(parsedOutputValue, parseFloat(ratioValue));
      setInputValue(newInput.toString());
      setSellPriceSum((parsedOutputValue * initialSellPrice).toString()); // Update sell price sum
    } else {
      setOutputValue("1");
    }
  };

  // When the ratio changes, recalculate the output/input based on the new ratio
  const handleRatioChange = (value: string) => {
    setRatioValue(value);
  };

  const handleRatioBlur = () => {
    const parsedRatioValue = parseFloat(ratioValue);
    if (!isNaN(parsedRatioValue)) {
      const newOutput = calculateOutput(parseFloat(inputValue), parsedRatioValue);
      setOutputValue(newOutput.toString());
      setSellPriceSum((newOutput * initialSellPrice).toString()); // Update sell price sum
    } else {
      setRatioValue(initialRatio.toString());
    }
  };

  // When the sell price sum changes, calculate how many ingots (output) are needed to match the sell price
  const handleSellPriceSumChange = (value: string) => {
    setSellPriceSum(value);
  };

  const handleSellPriceBlur = () => {
    const parsedSellPrice = parseFloat(sellPriceSum);
    if (!isNaN(parsedSellPrice)) {
      const newOutput = roundToMultiple(parsedSellPrice / initialSellPrice, 1);
      setOutputValue(newOutput.toString());

      // Update input based on the new output
      const newInput = calculateInput(newOutput, parseFloat(ratioValue));
      setInputValue(newInput.toString());
    } else {
      setSellPriceSum(initialSellPrice.toString());
    }
  };

  const ratioLabel = `Ratio`;
  const sellPriceLabel = `Sell Price Sum`;

  return (
    <div className="flex flex-col items-center justify-center gap-1 px-2 py-1">
      <h2 className="text-lg font-extrabold tracking-tight sm:text-[1.5rem]">
        {description}
      </h2>
      <span>1 = {initialSellPrice} Energy Links</span>
      <div className="flex flex-col">
        <div className="grid max-w-xl grid-cols-4 gap-3">
          <div className="flex flex-col">
            <label className="mb-1">{ratioLabel}</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title={ratioLabel}
              type="text"
              value={ratioValue}
              onChange={(e) => handleRatioChange(e.target.value)} // Update ratio as string
              onBlur={handleRatioBlur} // Parse and validate on blur
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">{inputDescription}</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title={inputDescription}
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)} // Update input value as string
              onBlur={handleInputBlur} // Parse and validate on blur
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">{outputDescription}</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title={outputDescription}
              type="text"
              value={outputValue}
              onChange={(e) => handleOutputChange(e.target.value)} // Update output value as string
              onBlur={handleOutputBlur} // Parse and validate on blur
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">{sellPriceLabel}</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title={sellPriceLabel}
              type="text"
              value={sellPriceSum}
              onChange={(e) => handleSellPriceSumChange(e.target.value)} // Update sell price sum as string
              onBlur={handleSellPriceBlur} // Parse and validate on blur
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
