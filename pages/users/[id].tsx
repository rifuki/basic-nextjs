import Layout from "../../components/Layout/index";
import { useRouter } from "next/router";

type UserType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
};

type UserDetailProps = {
    user: UserType;
};
function UserDetail(props: UserDetailProps) {
    const { user } = props;
    return (
        <Layout pageTitle="Users Detail Page">
            <div>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
        </Layout>
    );
}

export default UserDetail;

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: UserType) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

type GetStaticPropsType = {
    params: {
        id: string;
    };
};
export async function getStaticProps(context: GetStaticPropsType) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        props: {
            user,
        },
    };
}
