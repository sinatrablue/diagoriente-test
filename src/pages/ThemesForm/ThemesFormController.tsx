import { useEffect, useMemo, useState } from "react";
import { CardProps } from "../../components/Card/Card";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

export function useThemesFormController() {
  const navigate = useNavigate();

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

  // Form validation
  const idsArraySchema = z.string().array().nonempty();

  const [isFormError, setIsFormError] = useState(false);

  useEffect(() => {
    if (isFormError && checkedCards.length > 0) setIsFormError(false);
  }, [checkedCards]);

  const submitThemes = () => {
    try {
      idsArraySchema.parse(checkedCards);
      navigate("/themes/carousel");
    } catch {
      setIsFormError(true);
    }
  };

  return { cards, checkedCards, onCardCheck, isFormError, submitThemes };
}
