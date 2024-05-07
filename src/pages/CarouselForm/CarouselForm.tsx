import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export default function CarouselForm() {
  return (
    <div className="flex flex-col items-center gap-6 flex-grow">
      <div className="flex flex-col items-center gap-4">
        <h1 className="py-3 mt-6 text-3xl/10 text-[#494BFF]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et
        </h1>
        <h3 className="text-2xl/8">
          Forem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>

      <div className="w-[900px] p-6 flex flex-col items-center gap-6 rounded-xl shadow-2xl">
        <span>1/2</span>
        <h2 className="text-2xl font-bold px-16 text-center">
          01 Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio
        </h2>
        <div className="flex flex-col gap-3">
          <Card
            id="0"
            text="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            isChecked={false}
            onClick={() => console.log("Card clicked")}
            variant="slim"
          />
          <Card
            id="1"
            text="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            isChecked={false}
            onClick={() => console.log("Card clicked")}
            variant="slim"
          />
          <Card
            id="2"
            text="Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            isChecked={false}
            onClick={() => console.log("Card clicked")}
            variant="slim"
          />
          <Card
            id="3"
            text="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc"
            isChecked={false}
            onClick={() => console.log("Card clicked")}
            variant="slim"
          />
          <Card
            id="4"
            text="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            isChecked={false}
            onClick={() => console.log("Card clicked")}
            variant="slim"
          />
        </div>

        <Button
          text="Suivant"
          onClick={() => console.log("Suivant")}
          variant="small"
        />
      </div>
    </div>
  );
}
