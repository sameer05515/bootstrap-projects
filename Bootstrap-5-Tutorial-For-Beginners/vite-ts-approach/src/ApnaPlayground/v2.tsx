import { useMemo } from "react";
// import {
//   AiFillForward as NextIcon,
//   AiFillBackward as PrevIcon,
// } from "react-icons/ai";
import { NavLink, useSearchParams } from "react-router-dom";

import { componentNames, getComponentDetails, PlaygroundBaseV2Route } from "./utils";

const PlaygroundHeader = ({ param, next, prev }: { param: string; next: string; prev: string }) => {
  return (
    <div className="col">
      {/* Top Title Section */}
      <div className="row text-center text-uppercase fw-bold">
        <NavLink className="text-decoration-none" to={param ? PlaygroundBaseV2Route : "/"}>{param ? "TESTING PAGE HOME" : "ROOT"}</NavLink>
      </div>

      {/* Navigation Header Section */}
      <header className="row align-content-center">
        {/* Previous Link */}
        {prev && (
          <NavLink to={`${PlaygroundBaseV2Route}?tester=${prev}`} className="col-2 text-start text-break text-decoration-none">
            {/* <PrevIcon style={{ marginRight: "4px" }} /> */}
            <span className="fs-6">
              {"<<"} {prev}
            </span>
          </NavLink>
        )}

        {/* Current Route Info */}
        <span className={`${!prev?"col-12":"col-8"} text-center`}>Current Tester: '{param || "None"}'</span>

        {/* Next Link */}
        {next && (
          <NavLink to={`${PlaygroundBaseV2Route}?tester=${next}`} className="col-2 text-end text-break text-decoration-none">
            <span>
              {next} {">>"}
            </span>
            {/* <NextIcon style={{ marginLeft: "4px" }} /> */}
          </NavLink>
        )}
      </header>

      {/* Description Section */}
      <ToggleablDescription />

      {/* Navigation Links for Component Names */}
      {!param && (
        <div className="list-group fw-bolder">
          {componentNames.map((name) => (
            <NavLink key={name} to={`${PlaygroundBaseV2Route}?tester=${name}`} className="list-group-item text-center">
              <div>{name}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const ApnaPlaygroundBaseV2 = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("tester") || "";

  const { Component, next, prev } = useMemo(() => {
    return getComponentDetails(param);
  }, [param]);
  return (
    <div
      style={{
        // backgroundColor: isDarkMode ? "black" : "white",
        // color: isDarkMode ? "white" : "black",
        paddingLeft: "25px",
        // paddingTop: "5px",
      }}
    >
      <div>
        <PlaygroundHeader param={param} next={next} prev={prev} />

        {/* <UseGlobalServiceProviderTestingV1 />
  
          <MiscellaneousExamples /> */}
        {Component && <Component />}
      </div>
    </div>
  );
};

const ToggleablDescription = () => (
  <div>
    <div className="fs-4">Purpose: </div>
    <ul className="list-unstyled">
      <li>To test any compoent (especially custom component, built within TweetApp ) independently</li>
      <li>This v2 version only different from v1 in styling. This v2 version is packed with bootstrap 5</li>
    </ul>
  </div>
);

export default ApnaPlaygroundBaseV2;
