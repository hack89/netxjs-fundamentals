import { GetServerSideProps } from "next";

// EXECUTE ON SERVER
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("getserversideprops");
  return {
    props: {
      myFavNum: 47,
    },
  };
};

// EXECUTE SERVER AND CLIENT
const Dynamic = ({ myFavNum }) => {
  console.log("dynamic component");
  return <h1>{myFavNum}</h1>;
};

export default Dynamic;
