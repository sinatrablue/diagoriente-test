import { useMemo, useState } from "react";
import { CardProps } from "../Card/Card";

export function useMainFrameController() {
  // Should've came from an API call
  const cards: Pick<CardProps, "id" | "text">[] = useMemo(
    () => [
      { text: "Yorem ipsum dolor", id: "0" },
      { text: "Porem ipsum", id: "1" },
      { text: "Qorem ipsum dolor sit", id: "2" },
      { text: "Rorem ipsum dolor", id: "3" },
      { text: "Torem ipsum dolor", id: "4" },
      { text: "Porem ipsum dolor", id: "5" },
      { text: "Torem ipsum dolor", id: "6" },
      { text: "Vorem ipsum dolor sit", id: "7" },
    ],
    []
  );

  const [checkedCards, setCheckedCards] = useState<string[]>([]);

  const onCardCheck = (id: string) => {
    setCheckedCards(prev => {
      if (prev.includes(id)) return prev.filter(cardId => cardId !== id);
      return prev.concat(id);
    });
  };

  return { cards, checkedCards, onCardCheck };
}
