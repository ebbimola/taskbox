import {HorizontalRule} from './horizontal-rule'

export default {
  component: HorizontalRule,
  title: 'Hr/Horizontal',
  tags: ["autodocs"],
  paramters:{layout: "centered"},
  args:{
    spacing:{
      control:{
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg']
      }
    }
  }
}

export const Default = {
  args:{
    spacing: 'none'
  }
}