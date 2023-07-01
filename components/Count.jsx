import React, { useState, startTransition, useEffect } from 'react'

const Count = ({ start = 0, end, duration = 2, fromPrev }) => {
    const validate = () => fromPrev && typeof fromPrev === 'number' && end - fromPrev < end;
    const countDuration = duration * 1000;
    const interval = validate() ? end - fromPrev : end - start;

    const [count, setCount] = useState(validate() ? end - fromPrev : start)

    const fast = (count, range) => {
        const upper = count - 2
        const duration = range < 5 ? countDuration : countDuration * 0.7
        const iterations = range < 5 ? count : count - 2
        return new Promise((resolve) => {
            for (let index = start; index < iterations; index++) {
                setTimeout(() => {
                    startTransition(() => {
                        setCount(index)
                    })
                    if (index === upper - 1) {
                        resolve()
                    }
                }, (index * (duration / interval)))
            }
        })
    }

    const slow = async (count, range) => {
        if (range < 5) return;
        const duration = countDuration * 0.3
        for (let index = 0; index < 4; index++) {
            setTimeout(() => {
                startTransition(() => {
                    setCount(count - 3 + index)
                })
            }, (index * ((countDuration * 0.7 + (duration * (index === 0 ? 0.01 : index === 1 ? .025 : 1))) / 3)))
        }
    }

    const countUp = async (count) => {
        await fast(count, interval)
        slow(count, interval)
    }

    useEffect(() => {
        countUp(end)
    }, [])

    return (
        <>{count}</>
    )
}

export default Count