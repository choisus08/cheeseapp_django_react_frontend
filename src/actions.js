import { redirect} from "react-router-dom";
import url from './url';

export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct request body
    const newCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    // redirect to index page
    return redirect('/')
}


export const updateAction = async({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect(`/post/${id}`)
}


export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })

    return redirect('/')
}