import { FC } from "react";
import TemplateItem from "./templateItem";
interface templateListProps {
  data: any;
}
const templateList: FC<templateListProps> = ({ data }) => {
  const templateList = data.map((template: any, index: number) => (
    <div key={index}>
      <TemplateItem template={template} />
    </div>
  ));
  return <div>{templateList}</div>;
};

export default templateList;
