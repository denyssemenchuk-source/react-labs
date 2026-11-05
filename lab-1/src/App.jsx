import './App.css'
import ProfileCard from './components/ProfileCard'

const technologies = ['React 19', 'Next.js', 'React Router']

function App() {
  return (
    <main className="app">
      <ProfileCard
        name="Денис Семенчук"
        group="КН-313"
        technologies={technologies}
      />
    </main>
  )
}

export default App
