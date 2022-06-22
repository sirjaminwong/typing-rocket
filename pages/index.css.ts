import { style } from '@vanilla-extract/css';


export const container= style({
  display: 'flex',
  width: '100%',
  paddingTop: '40px',
  justifyContent: 'center',
});


export const lessonItem= style({
  display: 'flex',
  width: '80px',
  height: '80px',
  margin: '8px 8px 8px 8px',
  fontSize: '24px',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid red',
  borderRadius: '4px',
});
