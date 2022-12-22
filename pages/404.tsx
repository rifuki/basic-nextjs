import Layout from "../components/Layout/index";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 2000);
    }, []);
    return (
        <Layout pageTitle="404 Not Found">
            <div className="flex justify-center items-center h-full w-full text-3xl gap-5">
                <span className="font-bold text-4xl">404</span>
                <span className="font-light">|</span>
                <span className="font-extralight">Page Not Found</span>
            </div>
        </Layout>
    );
}

export default NotFound;
