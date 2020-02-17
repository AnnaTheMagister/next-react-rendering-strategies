import Layout from "../components/MyLayout";

const ClientSideRendering = () =>
  typeof window !== "undefined" ? (
    <p>This is the about page</p>
  ) : (
    ""
  );

export default ClientSideRendering;
