import { useEffect, useState } from "react"

function Session() {
    const [value, setValue] = useState()

    useEffect(() => {
        const number = sessionStorage.getItem('numero')
        setValue(number * 10)
    }, [])

    return (
        <>
            valor : {value}
        </>
    )
}

export default Session