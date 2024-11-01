import { useState } from "react"
// in the future we will get our data in a different way from the database...
import { sandwichArray } from "../../data/sandwich-array"
import SandwichCard from "./SandwichCard"

function SandwichContainer() {
    const [sandwiches, setSandwiches] = useState( sandwichArray )

    const mappedSandwiches = sandwiches.map(sw => <SandwichCard key={sw.id} sandwich={sw} />)

    return (
    <div className="cards-container">

        { mappedSandwiches }

    </div>
  )
}

export default SandwichContainer