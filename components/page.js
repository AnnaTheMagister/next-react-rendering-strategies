import Link from "next/link";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import { Typography } from "@material-ui/core";

function Page({ error, placeholderData, title }) {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
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
          placeholderData.map(show => (
            <ShowCard show={show} key={show.id} />
          ))}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default connect(state => state)(Page);
