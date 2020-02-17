import Link from "next/link";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";

function Page({ error, placeholderData, title }) {
  return (
    <div>
      <h1>{title}</h1>
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
          placeholderData.map(item => (
            <ShowCard showInfo={item} key={item.show.id} />
          ))}
        {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default connect(state => state)(Page);
