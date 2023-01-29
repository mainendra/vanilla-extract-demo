import { style } from '@vanilla-extract/css';

export const container = style({
    margin: 50,
    padding: 50,
    width: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid green',
    borderRadius: '20px',

    '::before': {
        content: 'Container',
        position: 'absolute',
        top: 60,
        left: 60,
    }
});
