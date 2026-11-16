import { useState } from 'react'

/**
 * Показує перші `step` елементів з `items` і кнопку, що показує наступні.
 *
 * Використання:
 *   <ShowMore items={reviews} step={3}>
 *     {(visibleItems) => <ul>…</ul>}
 *   </ShowMore>
 *
 * Вимоги — у тестах tests/ShowMore.test.jsx.
 */
export default function ShowMore({ items, step = 3, children }) {
  const [count, setCount] = useState(step)
  const visibleItems = items.slice(0, count)
  const hiddenCount = items.length - visibleItems.length

  return (
    <>
      {children(visibleItems)}
      {items.length > step && (
        // Одна й та сама кнопка на одному місці: React зберігає елемент, а
        // разом із ним і фокус, коли «Показати ще» стає «Згорнути».
        <button
          type="button"
          className="show-more"
          onClick={() =>
            setCount(
              hiddenCount > 0 ? Math.min(count + step, items.length) : step,
            )
          }
        >
          {hiddenCount > 0
            ? `Показати ще ${Math.min(step, hiddenCount)}`
            : 'Згорнути'}
        </button>
      )}
    </>
  )
}
