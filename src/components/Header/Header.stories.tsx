import { ThemeProvider } from '@material-ui/core'
import { Story, Meta } from '@storybook/react'
import theme from '@/theme'
import { Header } from '.'
import { HeaderProps } from './types'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  // argTypes: {

  // },
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
