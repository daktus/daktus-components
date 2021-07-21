import { ThemeProvider } from '@material-ui/core'
import { Story, Meta } from '@storybook/react'
import theme from '@/theme'
import { DropdownMenu } from '.'
import { DropdownMenuProps } from './types'
import { MdExitToApp, MdTrackChanges } from 'react-icons/md'

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
    {...args}
    avatar="G"
    labelTitle="Gabriel Rocha"
    labelSubtitle="gabriel.rocha@daktus.co"
    menuItems={[
      {
        label: 'Trocar de plataforma',
        icon: <MdTrackChanges />,
      },
      {
        label: 'Logout',
        icon: <MdExitToApp />,
      },
    ]}
  />
)

export const Default = Template.bind({})
Default.args = {}
