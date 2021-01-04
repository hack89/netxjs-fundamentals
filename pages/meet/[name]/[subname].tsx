import { useRouter } from "next/router";

const MeetName = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h2>{"this is [subname]"}</h2>
      <h1>{router.query.name}</h1>
      <h1>{router.query.subname}</h1>
    </>
  );
};

export default MeetName;
