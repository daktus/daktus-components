import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Story, Meta } from '@storybook/react'
import theme from '@/theme'
import { Header } from '.'
import { HeaderProps } from './types'
import { DropdownMenu } from '../DropdownMenu'
import { MdExitToApp, MdTrackChanges } from 'react-icons/md'

const menuItems = [
  {
    label: 'Trocar de plataforma',
    onClick: () => alert('Click Trocar plataforma'),
    icon: <MdTrackChanges />,
  },
  {
    label: 'Sair',
    onClick: () => alert('Click Sair'),
    icon: <MdExitToApp />,
  },
]

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
  argTypes: {
    withMenu: {
      control: 'boolean',
    },
  },
} as Meta

interface HeaderArgs extends HeaderProps {
  withMenu?: boolean
}

const Template: Story<HeaderArgs> = ({ withMenu, ...args }) => {
  return (
    <Header
      {...args}
      rightContent={
        withMenu && (
          <DropdownMenu
            labelTitle={`Juca Brandão`}
            labelSubtitle={'juca@teste.com'}
            avatar="J"
            menuItems={menuItems}
          />
        )
      }
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithMenu = Template.bind({})
WithMenu.args = {
  withMenu: true,
}
