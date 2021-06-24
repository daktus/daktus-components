import { Story, Meta } from '@storybook/react'

import { Button } from '.'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
  // argTypes: {

  // },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Some Button',
}
