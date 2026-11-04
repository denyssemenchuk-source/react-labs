import { useState } from 'react'

export default function ProfileCard({ name, group, technologies = [] }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="profile-card">
      <h1>Про мене</h1>
      <div className="profile-info">
        <p>
          <strong>Ім&apos;я:</strong> {name}
        </p>
        <p>
          <strong>Група:</strong> {group}
        </p>
      </div>

      <section className="profile-technologies">
        <h2>Технології, які я хочу опанувати в цьому курсі</h2>
        <ul className="tech-list">
          {technologies.map((tech) => (
            <li key={tech} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        className="like-button"
        onClick={() => setLikes((prev) => prev + 1)}
      >
        Подобається ({likes})
      </button>
    </article>
  )
}
