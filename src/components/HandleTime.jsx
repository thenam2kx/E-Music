import { useState, useEffect } from 'react'

function HandleTime() {
  const [time, setTime] = useState({ hours: '', minutes: '' })

  useEffect(() => {
    const currentTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setTime({ hours, minutes })
    }

    currentTime()

    const intervalID = setInterval(currentTime, 60000)

    return () => clearInterval(intervalID)

  }, [])

  return (
    <div>{ time.hours } : { time.minutes }</div>
  )
}

export default HandleTime