import { useRouter } from "next/router";

export default function MyDrink() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Hello from spread name file</h1>;
}
