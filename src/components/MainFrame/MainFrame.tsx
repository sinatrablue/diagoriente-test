import Button from "../Button/Button";
import Card from "../Card/Card";
import { useMainFrameController } from "./MainFrameController";

export default function MainFrame() {
  const { cards, checkedCards, onCardCheck } = useMainFrameController();

  return (
    <div className="flex flex-col items-center gap-10 bg-[#F0F4FF] flex-grow">
      <h1 className="py-3 mt-10 text-4xl/10 text-[#494BFF]">
        Thèmes Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <div>
        <div className="p-8 flex gap-6 bg-white max-w-[1130px]">
          <div className="flex flex-wrap gap-6">
            {cards.map(card => (
              <Card
                id={card.id}
                text={card.text}
                isChecked={checkedCards.includes(card.id)}
                onClick={onCardCheck}
                key={card.id}
              />
            ))}
          </div>
        </div>
        error
      </div>
      <Button />
      {/* <Button text="Suivant" onClick={submitThemes} /> */}
    </div>
  );
}
