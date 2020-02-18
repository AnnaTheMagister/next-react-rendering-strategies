import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadFullList } from "../actions";
import Page from "../components/page";

const ClientSideRenderingComponent = ({ onLoadFullList }) => {
  useEffect(() => {
    onLoadFullList();
  });
  return <Page title="Client Side Rendering" />;
};
ClientSideRenderingComponent.getInitialProps = () => {
  return { renderOnClient: true };
}

export default connect(null, { 
  onLoadFullList: loadFullList
})(ClientSideRenderingComponent);