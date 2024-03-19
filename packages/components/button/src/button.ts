import { ExtractPropTypes, PropType } from 'vue'
export type Type =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'default'
  | ''
export type Size = 'small' | 'normal' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'
export type Placement = 'left' | 'right'
export const buttonProps = {
  type: {
    type: String as PropType<Type>,
    validator: (val: string) => {
      return [
        'primary',
        'danger',
        'warning',
        'success',
        'info',
        'default',
        ''
      ].includes(val)
    },
    default: ''
  },
  size: String as PropType<Size>,
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left'
  }
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mouseDown: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = ExtractPropTypes<typeof buttonEmits>
