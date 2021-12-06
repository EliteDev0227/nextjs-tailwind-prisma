import { Fragment } from "react";
import Image from "next/image";

function PageHeader(props) {
  return (
    <Fragment>
      <div className="mx-auto h-12 w-auto relative">
        <Image src="/loops.svg" alt="Loops" layout="fill" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {props.title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {props.description}
      </p>
    </Fragment>
  );
}
export default PageHeader;
