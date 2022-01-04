import AOS from "aos";
import Image from "next/image";
import Header from "../components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Soon() {
  const router = useRouter();

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, [router]);

  return (
    <>
      <Header title="Coming Soon" />
      <section
        className="h-screen flex flex-col items-center justify-center"
        data-aos="fade-in"
      >
        <Image
          src="/img/coming-soon.svg"
          width={600}
          height={400}
          alt="404 - Not Found"
        />
        <h1 className="text-xl lg:text-3xl text-gray-900 text-center">
          Coming Soon. <br />{" "}
          <span className="text-base lg:text-xl text-gray-400 font-light">
            This page will be live soon. So, please wait!
          </span>{" "}
        </h1>
      </section>
    </>
  );
}
