import React from "react";

const Blog = () => {
  return <div />;
};
export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: "https://blog.gauravthakur.in" });
  res.end();
  return { props: {} };
}
export default Blog;
