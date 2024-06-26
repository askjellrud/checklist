import { Button } from 'react-bootstrap';
import { useGetCheck } from '../api/use-get-check';
import { useGetChecklist } from '../api/use-get-checklist';
import { Checklist } from '../checklist/Checklist';
import { Flex } from '../common/Flex'
import { timeToSimpleDate } from '../common/string';
import styles from '../App.module.scss';
import { useEffect, useState } from 'react';
import { Check } from '../checklists/NewCheck';
import { cloneDeep } from 'lodash';
import { useSubmitCheck } from '../api/use-submit-check-data';

type Props = {
  checkId: string;
}

export const CheckView = ({ checkId }: Props) => {
  const [check, setCheck] = useState<Check>();
  const fetchedCheck = useGetCheck(checkId);
  const submitCheck = useSubmitCheck(checkId);

  const { data: template } = useGetChecklist(check?.checklistId || "undefined", { enabled: !!check?.checklistId });


  useEffect(() => {
    if (fetchedCheck && fetchedCheck.isFetched && fetchedCheck.data != null) {
      const clonedCheck = cloneDeep(fetchedCheck.data);
      clonedCheck.data = clonedCheck.data || {};
      setCheck(prevCheck => {
        if (!prevCheck || prevCheck.id !== clonedCheck.id) {
          return clonedCheck;
        }
        return prevCheck;
      });
    }
  }, [fetchedCheck]);

  if (!check || !template) {
    return null;
  }

  const checkAt = check.checkAt ? timeToSimpleDate(check.checkAt) : "?";

  return (
    <Flex fullWidth fullHeight vertical padding32 gap16>

      <Flex fullWidth vertical gap16 padding32 style={{ backgroundColor: "#e1e1e1", border: "3px solid #ddd" }}>
        <Flex fullWidth>
          <Flex horizontalReverse paddingRight16 style={{ width: "30%" }}>
            Date
          </Flex>
          {checkAt}
        </Flex>

        <Flex fullWidth>
          <Flex horizontalReverse paddingRight16 style={{ width: "30%" }}>
            Area
          </Flex>
          {check.area}
        </Flex>

        <Flex fullWidth>
          <Flex horizontalReverse paddingRight16 style={{ width: "30%" }}>
            Reponsible
          </Flex>
          {check.responsible}
        </Flex>
      </Flex>

      <Flex style={{ paddingLeft: "7%" }} paddingTop16 vertical fullWidth>
        <Checklist
          mode='check'
          template={template}
          check={check}
          checkChanged={(newCheck: Check) => setCheck(newCheck)} />
      </Flex>

      <Flex style={{ paddingLeft: "7%" }} paddingTop8 fullWidth>
        <Button className={styles['app-btn']} onClick={() => {
          submitCheck.mutate(check.data)
        }}>Submit</Button>
      </Flex >

    </Flex>
  )
}
