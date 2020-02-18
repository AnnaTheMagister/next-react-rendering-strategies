import React from "react";
import { connect } from "react-redux";

import { loadFullList } from "../actions";
import Page from "../components/page";

const ServerSideRendering = () => {
  return <Page title="SSR with rehydration" />;
};

ServerSideRendering.getInitialProps = async (props) => {
  const { store } = props.ctx;

  if (!store.getState().placeholderData) {
    store.dispatch(loadFullList());
  }
}

export default connect()(ServerSideRendering);
