import { useEffect, useState } from 'react'

/**
 * Зворотний відлік від `totalSeconds` до нуля, по секунді.
 *
 * Використання:
 *   const { secondsLeft, isRunning, start, pause, reset } = useCountdown(180)
 *
 * Вимоги — у тестах tests/useCountdown.test.jsx.
 */
export function useCountdown(totalSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const [isActive, setIsActive] = useState(false)

  // Значення, обчислене під час рендерингу: на нулі відлік вважається
  // зупиненим, тож ефект нижче очищає інтервал без зайвого стану.
  const isRunning = isActive && secondsLeft > 0

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      // Функція-оновлювач бере актуальне значення, а не застаріле із замикання.
      setSecondsLeft((seconds) => Math.max(0, seconds - 1))
    }, 1000)

    // Очищення: інтервал не переживає ні паузу, ні демонтаж компонента.
    return () => clearInterval(intervalId)
  }, [isRunning])

  function start() {
    setIsActive(true)
  }

  function pause() {
    setIsActive(false)
  }

  function reset() {
    setIsActive(false)
    setSecondsLeft(totalSeconds)
  }

  return { secondsLeft, isRunning, start, pause, reset }
}
