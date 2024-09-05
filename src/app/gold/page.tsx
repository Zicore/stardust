import BasicCalculator from "../_components/BasicCalculator";

export default async function Home() {
  return (
    <>
      <h1 className="text-xl font-extrabold tracking-tight sm:text-[3rem]">
        Silver and Gold Ore Calculator
      </h1>
      <BasicCalculator
        description="Gold"
        inputDescription="Gold Ore"
        outputDescription="Gold Ingots"
        initialRatio={30}
        initialSellPrice={12000}
      ></BasicCalculator>
      <BasicCalculator
      description="Silver"
        inputDescription="Silver Ore"
        outputDescription="Silver Ingots"
        initialRatio={30}
        initialSellPrice={6000}
      ></BasicCalculator>
    </>
  );
}
