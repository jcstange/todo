import React from 'react'

type DummyProp = {
    dummy: string
}

export const App : React.FC<DummyProp> = ({ dummy }) => {
    return <div>{dummy}</div>
}