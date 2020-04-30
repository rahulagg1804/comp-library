import React from "react";
import SecondComponent from './SecondComponent';

export default {
  title: "SecondComponent"
};

export const Primary = () => <SecondComponent theme="primary" />;

export const Secondary = () => <SecondComponent theme="secondary" />;