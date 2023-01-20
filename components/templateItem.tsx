import { FC } from "react";
import Link from "next/link";
import { templateData } from "../types/template";
interface templateItemProps {
  template: templateData;
}
const templateItem: FC<templateItemProps> = ({ template }) => {
  return (
    <div className="card">
      <div className="card__text">
        <h1>
          {template.name}
          {/* alumni membership form template */}
        </h1>
        <h2>
          Engage your alumni network better with this alumni registration form
          template. Embed this in your website
          {/* {template.description} */}
        </h2>
      </div>
      <div className="card__link">
        <Link
          href={`${template.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          preview template
          <i className="fa fa-long-arrow-right mx-5 text-2xl"></i>
        </Link>
      </div>{" "}
    </div>
  );
};

export default templateItem;
