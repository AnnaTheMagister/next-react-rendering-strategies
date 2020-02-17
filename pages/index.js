import React from "react";
import { connect } from "react-redux";

import { loadData } from "../actions";
import Page from "../components/page";

const Index = () => {
  return <Page title="Server Side Rendering" />;
};

Index.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer };
}

export default connect()(Index);
