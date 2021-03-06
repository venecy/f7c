// eslint-disable-next-line
import { h } from 'hyperapp'
import cc from 'classnames'

/**
 * @typedef {Object} PreloaderProps
 * @prop {boolean} [white]
 * @prop {string} [class]
 *
 * @param {PreloaderProps} props
 */
const Preloader = (props) => {
  const {
    white,
    color = '#6c6c6c',
    ...rest
  } = props

  const stroke = white ? '#ffffff' : color
  const defId = `preloader-${stroke}`
  const hrefId = `#${defId}`

  return (
    <span
      {...rest}
      class={cc('preloader-svg', rest.class)}
    >
      <svg
        viewBox='0 0 120 120'
        xmlns='http://www.w3.org/2000/svg'
        xmlns xlink='http://www.w3.org/1999/xlink'>
        <defs>
          <line id={defId} x1='60' x2='60' y1='7' y2='27' stroke={stroke} stroke-width='11' stroke-linecap='round' />
        </defs>
        <g>
          <use xlink href={hrefId} opacity='.27' />
          <use xlink href={hrefId} opacity='.27' transform='rotate(30 60,60)' />
          <use xlink href={hrefId} opacity='.27' transform='rotate(60 60,60)' />
          <use xlink href={hrefId} opacity='.27' transform='rotate(90 60,60)' />
          <use xlink href={hrefId} opacity='.27' transform='rotate(120 60,60)' />
          <use xlink href={hrefId} opacity='.27' transform='rotate(150 60,60)' />
          <use xlink href={hrefId} opacity='.37' transform='rotate(180 60,60)' />
          <use xlink href={hrefId} opacity='.46' transform='rotate(210 60,60)' />
          <use xlink href={hrefId} opacity='.56' transform='rotate(240 60,60)' />
          <use xlink href={hrefId} opacity='.66' transform='rotate(270 60,60)' />
          <use xlink href={hrefId} opacity='.75' transform='rotate(300 60,60)' />
          <use xlink href={hrefId} opacity='.85' transform='rotate(330 60,60)' />
        </g>
      </svg>
    </span >
  )
}

export default Preloader
