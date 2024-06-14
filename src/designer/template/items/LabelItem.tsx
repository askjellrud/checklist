import { ChecklistItem } from "./ChecklistItem";

type Props = {
  label: string;
};

export const LabelItem: React.FC<Props> = ({ label }) => {
  return (
    <ChecklistItem>
      {label}
    </ChecklistItem>
  )
}
