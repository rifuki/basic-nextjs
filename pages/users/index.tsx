import Layout from "../../components/Layout/index";
import { useRouter } from "next/router";

function Users(props: { dataUsers: Array<any> }) {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="Users Page">
            <div className="flex flex-col gap-5">
                {dataUsers.map((user) => (
                    <div
                        onClick={() => router.push(`/users/${user.id}`)}
                        key={user.id}
                        className="border-2 rounded-md border-blue-400 p-4 cursor-pointer hover:bg-blue-400 hover:text-white"
                    >
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Users;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
}
