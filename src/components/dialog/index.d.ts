import { TransitionProperties, WraperProperties, Component } from '../_utils/interfaces'

export interface DialogButtonProperties {
  /**
   * Button content
   */
  text: string | JSX.Element
  /**
   * Click handler
   */
  onclick?: (e: Event) => void
  /**
   * bold font
   */
  bold?: boolean
}


export interface DialogProperties extends WraperProperties, TransitionProperties {
  /**
   * Title content
   */
  title: string | JSX.Element
  /**
   * Main content
   */
  text: string | JSX.Element
  /**
   * Sub-main content
   */
  afterText?: string | JSX.Element
  /**
   * Button properties
   */
  buttons: Array<DialogButtonProperties>
  /**
   * Event handler when any button is clicked
   */
  onButtonsClick?: (e: Event) => void
  /**
   * Event handler when mask is clicked
   */
  onMaskClick?: (e: Event) => void
  /**
   * Display buttons vertially
   */
  verticalButtons?: boolean
}


export interface DialogComponent<P> extends Component<P> {
  alert: (text: string, title?: string, onOk?: () => void) => () => void
  confirm: (text: string, title?: string, onOk?: () => void, onCancel?: () => void) => () => void
  action: (text: string, title?: string, buttons?: DialogButtonProperties[]) => () => void
  custom: (props: DialogProperties) => () => void
  setDefault: (options: { title?: string, okText?: string, cancelText?: string }) => void
}

/**
 * Dialog component
 */
declare const Dialog: DialogComponent<DialogProperties>

export default Dialog