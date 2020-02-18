import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProgressiveHydration from "../utils/progressive-hydration";

import { loadFullList } from "../actions";
import { Typography } from "@material-ui/core";
import ShowCard from "../components/ShowCard";

const ProgressiveHydrationPage = ({ placeholderData, error }) => {
  return (
    <div>
      <Typography variant="h4">Progressive Hydration</Typography>
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
            <ProgressiveHydration key={show.id} force={idx < 3}>
              <ShowCard show={show} />
            </ProgressiveHydration>
          ))}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    </div>
  );
};

ProgressiveHydrationPage.getInitialProps = async props => {
  const { store } = props.ctx;

  if (!store.getState().placeholderData) {
    store.dispatch(loadFullList());
  }
};

export default connect(state => state)(ProgressiveHydrationPage);
