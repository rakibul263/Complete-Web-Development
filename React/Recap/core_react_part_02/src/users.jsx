import { use } from "react"

export default function Users({fetchUsers}){
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="card">
            <h1>Users: </h1>
        </div>
    )
}