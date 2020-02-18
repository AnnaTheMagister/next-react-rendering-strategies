import React, { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";

import { clearState } from "../actions";
import { Button } from "@material-ui/core";

const examples = [
  { title: "SSR with rehydration", url: "/server-side-rendering" },
  { title: "Client Side Rendering", url: "/client-side-rendering" }
];

const Index = ({ onClearState }) => {
  useEffect(() => {
    onClearState();
  });
  return (
    <React.Fragment>
      {examples.map(example => (
        <Link href={example.url}>
          <Button color="primary">{example.title}</Button>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default connect(null, {
  onClearState: clearState
})(Index);
