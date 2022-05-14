/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

function Template(args: StepItemProps) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  icon: 'step1',
  title: 'Judul',
  desc1: 'desc1',
  desc2: 'desc2',
};
