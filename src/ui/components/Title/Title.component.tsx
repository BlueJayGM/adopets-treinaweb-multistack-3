import { SubTitle, Title } from "./Title.style";

interface TitleContainerProps {
  title?: string;
  subtitle?: string | JSX.Element;
}

export default function TitleContainer({ title, subtitle }: TitleContainerProps) {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </>
  );
}