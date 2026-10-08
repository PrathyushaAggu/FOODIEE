import './Categories.css'

function Categories() {
  const categories = [
    { name: 'North Indian', color: '#FF6B6B' },
    { name: 'South Indian', color: '#4ECDC4' },
    { name: 'Desserts', color: '#A8E6CF' },
    { name: 'Snacks',  color: '#95E1D3' },
    { name: 'Breakfast', color: '#F38181' },
    { name: 'Lunch', color: '#AA96DA' },
  ]

  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2 className="section-title">Order by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" style={{ '--category-color': category.color }}>
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

