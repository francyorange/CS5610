import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as client from "../client";
export default function People() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams();

    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid as string);
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [cid]);
    return (
        <div>
            <PeopleTable users={users} />
        </div>
    );
}

