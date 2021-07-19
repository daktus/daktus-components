import { ThemeProvider } from '@material-ui/core'
import { Story, Meta } from '@storybook/react'
import theme from '@/theme'
import { DropdownMenu } from '.'
import { DropdownMenuProps } from './types'

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
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

const Template: Story<DropdownMenuProps> = args => (
  <DropdownMenu
    avatar="G"
    labelTitle="Gabriel Rocha"
    labelSubtitle="gabriel.rocha@daktus.co"
    onLabelClick={() => alert('abre menu')}
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {}
