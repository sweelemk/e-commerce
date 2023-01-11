import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from ".";

export default {
  title: "UI Components/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
