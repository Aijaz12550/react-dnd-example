import { memo, FC, useState } from "react"
import Swimlane from "./swimlane"
import { nanoid } from 'nanoid'
type Props = {}

let dummy_swimlanes = [
    {id: "s1", sname: "in progress", tickets:[{id:"t1", tname:"building signup page"}]},
    {id: "s2", sname: "Done", tickets:[{id:"t2", tname:"Home page"},{id:"t3", tname:"Header design"},{id:"t4", tname:"Footer Design"}]}
]
const Container:FC<Props> = (props) => {
    let [ simlns, setSwimlanes] = useState(dummy_swimlanes)
   

    return (
        <div className="container">
            {
                simlns.map((swimlane, index) => {
                    return (
                        <Swimlane key={nanoid()} title={swimlane.sname} tickets={swimlane.tickets} />
                    )
                })
            }
            
        </div>
    )
}

export default memo(Container)