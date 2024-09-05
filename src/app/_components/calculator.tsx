"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [fuel, setFuel] = useState<number>(0); // Allow fuel to be string to handle input
  const [stardustOre, setStardustOre] = useState<number>(0);
  const [stardustSource, setStardustSource] = useState<number>(0);

  const fuelMultiple = 15; // The nearest multiple of Fuel to round down to

  // Rounding down to the nearest multiple of 15
  const roundToMultiple = (value: number, multiple: number) => {
    return Math.floor(value / multiple) * multiple;
  };

  const handleFuelInput = (value: string) => {
    // Allow string input for easier handling in input fields
    const fuelValue = parseFloat(value);
    setFuel(fuelValue);
  };

  const handleFuelBlur = () => {
    if (isNaN(fuel)) {
      setFuel(0);
      return;
    }
    const roundedFuel = roundToMultiple(fuel, fuelMultiple); // Round down to nearest multiple of 15
    setFuel(roundedFuel);
    setStardustSource((roundedFuel / fuelMultiple) * 50); // Calculating Stardust Source
    setStardustOre((roundedFuel / fuelMultiple) * 50); // Calculating Stardust Ore
  };

  const handleStardustSourceChange = (value: string) => {
    const stardustSourceValue = parseFloat(value);
    if (isNaN(stardustSourceValue)) {
      setStardustSource(0);
      return;
    }
    const fuelCalculated = (stardustSourceValue * fuelMultiple) / 50; // Calculate Fuel from Stardust Source
    const roundedFuel = roundToMultiple(fuelCalculated, fuelMultiple); // Round Fuel
    setFuel(roundedFuel);
    setStardustSource(stardustSourceValue); // Keep Stardust Source as entered
    setStardustOre((roundedFuel / fuelMultiple) * 50); // Calculating Stardust Ore
  };

  const handleStardustOreChange = (value: string) => {
    const stardustOreValue = parseFloat(value);
    if (isNaN(stardustOreValue)) {
      setStardustOre(0);
      return;
    }
    const fuelCalculated = (stardustOreValue * fuelMultiple) / 50; // Calculate Fuel from Stardust Ore
    const roundedFuel = roundToMultiple(fuelCalculated, fuelMultiple); // Round Fuel
    setFuel(roundedFuel);
    setStardustOre(stardustOreValue); // Keep Stardust Ore as entered
    setStardustSource((roundedFuel / fuelMultiple) * 50); // Calculating Stardust Source
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-[5rem]">
        Stardust Calculator
      </h1>
      <div className="flex flex-col">
        <div className="grid max-w-md grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="mb-1">Fuel</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title="Fuel"
              type="number"
              value={fuel}
              onChange={(e) => handleFuelInput(e.target.value)} // Handle raw input
              onBlur={handleFuelBlur} // Round on blur (when user leaves field)
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Stardust Ore</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title="Stardust Ore"
              type="number"
              value={stardustOre}
              onChange={(e) => handleStardustOreChange(e.target.value)}
              onBlur={handleFuelBlur} // Round on blur (when user leaves field)
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Stardust Source</label>
            <input
              className="rounded border border-gray-300 p-2 text-black"
              title="Stardust Source"
              type="number"
              value={stardustSource}
              onChange={(e) => handleStardustSourceChange(e.target.value)}
              onBlur={handleFuelBlur} // Round on blur (when user leaves field)
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
