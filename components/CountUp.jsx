import React, { useState, startTransition, useEffect } from 'react'

const CountUp = ({ start = 0, end, duration = 2, fromPrev }) => {
    const validate = () => {
        return fromPrev && typeof fromPrev === 'number' && end - fromPrev < end
    }
    const countDuration = duration * 1000;
    const interval = validate() ? end - fromPrev : end - start;

    const [count, setCount] = useState(validate() ? end - fromPrev : start)

    const countUp = (count) => {
        for (let index = start; index < count + 1; index++) {
            setTimeout(() => {
                startTransition(() => {
                    setCount(index)
                })
            }, (index * (countDuration / interval)))
        }
    }

    useEffect(() => {
        countUp(end)
    }, [])

    return (
        <>{count}</>
    )
}

export default CountUp