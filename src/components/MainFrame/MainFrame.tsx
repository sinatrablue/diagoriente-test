import Card from "../Card/Card";

export default function MainFrame() {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#F0F4FF] flex-grow">
      <h1 className="py-3 mt-10 text-4xl/10 text-[#494BFF]">
        Thèmes Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <div className="p-8 flex gap-6 bg-white">
        <div className="flex flex-col gap-6">
          <Card text="Yorem ipsum dolor" onCheck={() => {}} />
          <Card text="Porem ipsum" onCheck={() => {}} />
          <Card text="Qorem ipsum dolor sit" onCheck={() => {}} />
          <Card text="Rorem ipsum dolor" onCheck={() => {}} />
        </div>
        <div className="flex flex-col gap-6">
          <Card text="Torem ipsum dolor" onCheck={() => {}} />
          <Card text="Porem ipsum dolor" onCheck={() => {}} />
          <Card text="Torem ipsum dolor" onCheck={() => {}} />
          <Card text="Vorem ipsum dolor sit " onCheck={() => {}} />
        </div>
      </div>
    </div>
  );
}
