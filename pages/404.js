import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    console.log("redirect to home page");
  }, []);
  return (
    <div>
      <h1>Ooops!!</h1>
      <p>Tis page was not found.</p>
    </div>
  );
};

export default NotFound;
