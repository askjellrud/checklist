import { useQueryTemplates } from '../api/use-query-temlates'
import { Flex } from '../common/Flex'

export const Templates = () => {
  const templates = useQueryTemplates();

  if (!templates.data) {
    return null;
  }

  return (
    <Flex fullWidth vertical padding16 gap16>
      {templates.data.map((template) => (
        <Flex style={{ border: "1px solid #bbb" }} fullWidth paddingRight16 spaceBetween>
          <Flex center fullWidth padding8>
            {template.name}
          </Flex>
          <Flex>...</Flex>
        </Flex>
      ))}
      New template...
    </Flex>
  )
}
