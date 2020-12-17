import React from "react";

const Editor = () => {
  return <div />;
};
export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: "https://editor-pi.vercel.app/" });
  res.end();
  return { props: {} };
}
export default Editor;
