import { PropertyValue } from '@stitches/react';

export const utils = {
  m: (value: PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  spaceX: (value: PropertyValue<'margin'>) => ({
    '> * + *': {
      marginLeft: value,
    },
  }),
  spaceY: (value: PropertyValue<'margin'>) => ({
    '> * + *': {
      marginTop: value,
    },
  }),
};
