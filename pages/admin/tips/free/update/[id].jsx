import { useRouter } from "next/router";
import { Form } from "../add";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [init, setInit] = useState([])
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://teal-worried-adder.cyclic.app/v1/freetip/${id}`);
        const data = await response.json();
        setInit(data)
      } catch (error) {
        console.error("Error:", error.response);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <section className='pt-[64px] md:pt-[88px]'>
      <div className='app-container'>
        <h1 className="text-center text-3xl my-4 gradient-text font-bold">Update Free Tips</h1>
        <Form update init={init} />
      </div>
    </section>
  );
}
