import { useState } from "react"
export default function useSwitch(defaultValue = false) {
    const [isOn, setIsOn] = useState(defaultValue);
    const toggle = () => {
        setIsOn(curr => !curr)
    }
    return [isOn, toggle]

}