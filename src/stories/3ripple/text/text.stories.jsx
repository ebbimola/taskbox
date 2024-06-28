import React from 'react';
import {Text} from './text';

export default {
    title: 'Text/Text',
    component: Text,
    parameter: { layout: "centered" },
    tags: ["autodocs"],
    args: {
       children:{
        control: false
       }
    },
};

export const Default = 
{
    args:{
        children:{
            
        }
    }
}

export const Sizes = () => (
  <>
    <Text size="T200">This is T200 size text</Text>
    <Text size="T300">This is T300 size text</Text>
    <Text size="T400">This is T400 size text</Text>
    <Text size="T500">This is T500 size text</Text>
    <Text size="T600">This is T600 size text</Text>
    <Text size="T700">This is T700 size text</Text>
    <Text size="T800">This is T800 size text</Text>
    <Text size="T900">This is T900 size text</Text>
  </>
);

export const Weights = () => (
  <>
    <Text weight="light">This is light weight text</Text>
    <Text weight="regular">This is regular weight text</Text>
    <Text weight="medium">This is medium weight text</Text>
    <Text weight="bold">This is bold weight text</Text>
    <Text weight="heavy">This is heavy weight text</Text>
  </>
);

export const Colors = () => (
  <>
    <Text color="default">This is default color text</Text>
    <Text color="inherit">This is inherit color text</Text>
    <Text color="success">This is success color text</Text>
    <Text color="error">This is error color text</Text>
    <Text color="warning">This is warning color text</Text>
    <Text color="info">This is info color text</Text>
    <Text color="light">This is light color text</Text>
    <Text color="dark">This is dark color text</Text>
  </>
);

export const Transforms = () => (
  <>
    <Text transform="uppercase">This is uppercase text</Text>
    <Text transform="lowercase">This is lowercase text</Text>
    <Text transform="capitalize">This is capitalize text</Text>
  </>
);

export const Decorations = () => (
  <>
    <Text decoration="underline">This is underlined text</Text>
    <Text decoration="strikethrough">This is strikethrough text</Text>
  </>
);

export const ItalicAndMarginBottom = () => (
  <>
    <Text italic>This is italic text</Text>
    <Text marginBottom>This text has margin bottom</Text>
  </>
);

// Combination of Props
export const Combination = () => (
  <Text
    as="h1"
    size="T900"
    weight="bold"
    alignment="center"
    italic
    color="success"
    transform="uppercase"
    decoration="underline"
    marginBottom
  >
    This is a combination of all props
  </Text>
);
