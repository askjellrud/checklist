import { useGetCheck } from '../api/use-get-check';
import { useGetChecklist } from '../api/use-get-checklist';
import { Checklist } from '../checklist/Checklist';
import { Flex } from '../common/Flex'
import { timeToSimpleDate } from '../common/string';

type Props = {
  checkId: string;
}

export const CheckView = ({ checkId }: Props) => {
  const check = useGetCheck(checkId);
  const template = useGetChecklist(check.data?.checklistId || "undefined", { enabled: !!check.data?.checklistId });

  if (!check.data || !template.data) {
    return null;
  }
  console.log(check.data, template.data);

  const checkAt = check.data.checkAt ? timeToSimpleDate(check.data.checkAt) : "?";

  return (
    <Flex fullWidth vertical paddingTop32 paddingLeft16 paddingRight16 gap16>

      <Flex fullWidth>
        <Flex style={{ width: "30%" }}>
          {checkAt}
        </Flex>
      </Flex>

      TODO CHECK
      <Checklist mode='check' template={template.data} ></Checklist>
    </Flex >
  )
}
