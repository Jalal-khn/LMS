
import UpdatePage from "@/app/components/change-data"
import GetsingleData from "@/crud-operations/data-update"


export default async function GetId({params}){
    if(!params.id){
        return <div>id is required</div>
    }
    const data = await GetsingleData(params.id)
    if(!data){
        return <div>Data is not found</div>
    }
    return(
       <UpdatePage  data={data}/>
    )

}