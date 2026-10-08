import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Fresh Home-Cooked Meals, Delivered to Your Door</h1>
        <p className="hero-subtitle">Discover authentic flavors from passionate home makers in your neighborhood</p>
        
        <div className="search-bar">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input 
              type="text" 
              placeholder="Search for food, home makers, or dishes..." 
              className="search-input"
            />
          </div>
          <button className="search-btn">Search</button>
        </div>

        <div className="popular-searches">
          <span className="popular-label">Popular:</span>
          <a href="#" className="popular-tag">Biryani</a>
          <a href="#" className="popular-tag">Thali</a>
          <a href="#" className="popular-tag">Dosa</a>
          <a href="#" className="popular-tag">Paratha</a>
          <a href="#" className="popular-tag">Curry</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

