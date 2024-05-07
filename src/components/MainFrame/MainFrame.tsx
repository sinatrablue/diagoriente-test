import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorBadge from "../ErrorBadge/ErrorBadge";
import { useMainFrameController } from "./MainFrameController";

export default function MainFrame() {
  const { cards, checkedCards, onCardCheck, isFormError, submitThemes } =
    useMainFrameController();

  return (
    <div className="flex flex-col items-center gap-10 bg-[#F0F4FF] flex-grow">
      <h1 className="py-3 mt-10 text-4xl/10 text-[#494BFF]">
        Thèmes Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <div className="flex flex-col gap-2">
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
        {/* that div of fixed height must always be present to avoid any odd looking effect in height */}
        <div className="h-6">
          {isFormError && <ErrorBadge text="Veuillez sélectionner un thème" />}
        </div>
      </div>
      <Button text="Suivant" onClick={submitThemes} />
    </div>
  );
}
