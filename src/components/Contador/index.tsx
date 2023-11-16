import { useEffect, useState } from "react"

const Contador = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
  
    useEffect(() => {
      console.log("cargo Contador")
    }, [])

    
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <button onClick={() => setCount2((count2) => count2 + 1)}>
                count is {count2}
            </button>
        </>
    )
}

export default Contador