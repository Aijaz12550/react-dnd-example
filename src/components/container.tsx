import { memo, FC, useState } from "react"
import Swimlane from "./swimlane"
import { nanoid } from 'nanoid'
type Props = {}

let dummy_swimlanes = [
    {id: "s1", sname: "in progress", tickets:[{id:"t1", tname:"building signup page"}]},
    {id: "s2", sname: "Done", tickets:[{id:"t2", tname:"Home page"},{id:"t3", tname:"Header design"},{id:"t4", tname:"Footer Design"}]},
    {id: "s3", sname: "In Review", tickets:[{id:"t2", tname:"Home page"},{id:"t3", tname:"Header design"},{id:"t4", tname:"Footer Design"}]}
]
const Container:FC<Props> = (props) => {
    let [ simlns, setSwimlanes] = useState(dummy_swimlanes)

    const drop_handler = (prev_swimlane_id: string, current_swimlane_id: string, ticket_id: string, tname:string) => {

        console.log("prev_simlane_id",prev_swimlane_id)
        console.log("current_swimlane_id",current_swimlane_id)

        // adding card to current swimlane
        let current_swimlane_index = simlns.findIndex(val=>val.id === current_swimlane_id)
        simlns[current_swimlane_index].tickets.push({id:ticket_id,tname})

        // removing card from prev simlane
        let prev_swimlane_index = simlns.findIndex(val=>val.id === prev_swimlane_id)
        simlns[prev_swimlane_index].tickets.splice(prev_swimlane_index,1)

        setSwimlanes([...simlns])
    }

    return (
        <div className="container">
            {
                simlns.map((swimlane, index) => {
                    return (
                        <Swimlane 
                        key={nanoid()} 
                        drop_handler={drop_handler} 
                        title={swimlane.sname} 
                        swimlane_id={swimlane.id} 
                        tickets={swimlane.tickets} 
                        />
                    )
                })
            }
            
        </div>
    )
}

export default memo(Container)