import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../style/themes/themeContract.css';


export const buttonStyle = recipe({
  base: {
    backgroundColor: vars.color.brand,
    color: vars.font.color,
    border: 'solid',
    borderColor: vars.color.brand,
    borderRadius: vars.buttonRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    margin: 10,
  },
  variants :{
    padding: {
      small: {
        padding: vars.padding.small,
      },
      medium: {
        padding: vars.padding.medium,
      },
      large: {
        padding: vars.padding.large,
      },
      extraLarge: {
        padding: calc(vars.padding.large).multiply(2).toString(),
      }
    },
    width: {
      full: {
        width: '100%'
      }
    }
  },
  defaultVariants: {
    padding: "medium"
  }
})

export type ButtonProps = RecipeVariants<typeof buttonStyle>;
