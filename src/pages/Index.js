import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';
import {Form} from "react-router-dom";

const Index = (props) => {
    const cheeses = useLoaderData()
    
    return <>
    <div style={{textAlign: "center", width: "80%", margin: "auto"}}>
       <h2>Create Cheese</h2>
       <Form action='/create' method='post'>
            <input type="text" name="name" placeholder='Name' />
            <input type="text" name="origin_country" placeholder='Country Origin' />
            <input type="text" name="type" placeholder='Type' />
            <button>Create New Cheese</button>
        </Form> 
    </div>

    {cheeses.map((cheese) => <Post post={cheese} key={cheese.id} />)}
    </>;
};

export default Index;