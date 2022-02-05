import { fontFace, keyframes, style } from '@vanilla-extract/css';
import { sprinkles } from '../../styles/sprinkles.css';

export const left = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  paddingX: 'large',
});


export const lessonItem = style({
  width: '100px',
  height: '30px',
  padding: vars.space.large,
  color: vars.colors.primary,
});


import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const variant = styleVariants({
  primary: { background: 'blue' },
  secondary: { background: 'aqua' }
});

export const primary = style(
 { background: 'blue' },
)

export const secondary = style(
  { background: 'blue' },
 )

 const myFont = fontFace({
  src: 'local("Comic Sans MS")'
});


const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const animated = style({
  animation: `3s infinite ${rotate}`,
  fontFamily: myFont
});

