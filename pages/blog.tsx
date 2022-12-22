import Layout from "../components/Layout/index";

type Blog = {
    id: number;
    title: string;
    body: string;
};

type BlogType = {
    dataBlog: Array<Blog>;
};

function Blog(props: BlogType) {
    const { dataBlog } = props;
    return (
        <Layout pageTitle="Blog Page">
            <div className="flex flex-col gap-5">
                {dataBlog.map((blog: Blog) => (
                    <div
                        key={blog.id}
                        className="border-2 border-blue-400 p-4 hover:bg-blue-400 hover:text-white"
                    >
                        <p>id: &nbsp;{blog.id}</p>
                        <p>title: &nbsp;{blog.title}</p>
                        <p>body: &nbsp;{blog.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Blog;

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        },
    };
}
