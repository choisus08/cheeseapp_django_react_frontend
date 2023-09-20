import {Link, useLoaderData} from "react-router-dom";
import { Form } from "react-router-dom";


const Show = (props) => {
    const post = useLoaderData();

    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto"
    }
       
    return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h3>{post.origin_country}</h3>
            <h3>{post.type}</h3>

            <h2>Update Cheese</h2>
            <Form action={`/update/${post.id}`} method='post' style={{textAlign: "center", width: "80%", margin: "auto"}}>
                <input type="text" name="name" defaultValue={post.name} />
                <input type="text" name="origin_country" defaultValue={post.origin_country} />
                <input type="text" name="type" defaultValue={post.type} />
                <button>Update Cheese</button>
            </Form> 

            <Form method='delete' action={`/delete/${post.id}`}>
                <button>Delete Cheese</button>
            </Form>

            <Link to='/'>Back To Index</Link>
        </div>
    )
};

export default Show;


