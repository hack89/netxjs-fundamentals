import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

// EXECUTE ON SERVER
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("getstaticprops", context.params.name);
  return {
    props: {
      myFavNum: 47,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getstaticpaths");
  return {
    paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
    fallback: true,
  };
};

const FruitName = ({ myFavNum }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  console.log(router);
  return <h1>{myFavNum}</h1>;
};

export default FruitName;
