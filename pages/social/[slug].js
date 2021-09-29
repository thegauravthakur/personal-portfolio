import {social} from "../../types/social";

export default () => {
  return <div><p>hello</p></div>
};

export async function getServerSideProps({params}) {
  const url = social[params.slug];
  if (!url)
    return {
      notFound: true,
    }
  return {
    redirect: {
      permanent: false,
      destination: url
    }
  }
}
