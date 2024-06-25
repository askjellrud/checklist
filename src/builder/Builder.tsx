import { useEffect, useState } from 'react';
import { Checklist } from '../checklist/Checklist'
import { Flex } from '../common/Flex'
import { TemplateBuilder } from './template/TemplateBuilder'
import { useTemplateStore } from './template/useTemplateStore';
import { Check, newCheck } from '../checklists/NewCheck';

export const Builder = () => {
  const { template } = useTemplateStore();
  const [check, setCheck] = useState<Check>(newCheck());

  useEffect(() => {
    setCheck(newCheck())
  }, [template])

  return (
    <>
      <Flex style={{ overflow: "auto", resize: "horizontal" }} vertical fullHeight halfWidth padding32 gap16>
        <TemplateBuilder />
      </Flex>
      <Flex vertical style={{ borderLeft: "1px solid #ccc", overflow: "auto" }} padding32 halfWidth fullHeight>
        <Checklist
          mode='builder'
          template={template}
          check={check}
          checkChanged={(newCheck) => setCheck(newCheck)}
        />
      </Flex>
    </>
  )
}
