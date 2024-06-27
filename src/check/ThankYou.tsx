import { Flex } from '../common/Flex'
import { colors } from '../common/colors'


export const ThankYouView = () => {

  return (
    <Flex style={{ color: colors.themeEvenDarker }} center justifyCenter fullWidth fullHeight vertical padding32 gap16>
      <h2>
        We appreciate your input 🌟<br />
      </h2>
      <h2>
        Thank you for your feedback! 😊
      </h2>
    </Flex>
  )
}
