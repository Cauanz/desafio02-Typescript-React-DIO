import "./Button.css";

type BotaoType = {
  isClick: () => void;
  children: React.ReactNode;
};

export default function ButtonComponent({ isClick, children }: BotaoType) {
  return (
    <button className="button" onClick={isClick}>
      {children}
    </button>
  );
}
