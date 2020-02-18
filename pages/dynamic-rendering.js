import React, { useEffect } from "react";
import { connect } from "react-redux";
import DynamicRendering from "../utils/dynamic-rendering";

import { loadFullList } from "../actions";
import { Typography } from "@material-ui/core";
import ShowCard from "../components/ShowCard";

const bots = [
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
];


const DynamicRenderingPage = ({ placeholderData, error, isServerBot }) => {
  const isClientBot = typeof window !== "undefined" && bots.includes(window.navigator.userAgent);
  return (
    <div>
      <Typography variant="h4">Dynamic Rendering</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%"
        }}
      >
        {placeholderData &&
          placeholderData.map((show, idx) => (
            <DynamicRendering
              key={show.id}
              isBot={isServerBot || isClientBot}
              force={idx < 3}
            >
              <ShowCard show={show} />
            </DynamicRendering>
          ))}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    </div>
  );
};

DynamicRenderingPage.getInitialProps = async props => {
  const { store, req } = props.ctx;
  const isRequestedFromBot = req && bots.includes(req.headers['user-agent']);

  if (!store.getState().placeholderData) {
    store.dispatch(loadFullList());
  }

  return { isRequestedFromBot };
};

export default connect(state => state)(DynamicRenderingPage);
