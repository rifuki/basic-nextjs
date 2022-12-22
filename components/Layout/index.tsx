import Header from "../Header/index";
import Footer from "../Footer/index";
import { ReactNode } from "react";
import Head from "next/head";

function Layout(props: { children: ReactNode; pageTitle?: string }) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Website NextJS Basic" />
            </Head>

            <div className="max-w-screen max-h-screen flex flex-col">
                <Header />
                <div className="flex-1 py-14 container-wrapper">{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
