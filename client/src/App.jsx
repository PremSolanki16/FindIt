
import './App.css'
import campusImage from './assets/campus.avif'

const categories = [
  { name: 'Electronics', icon: '▣' },
  { name: 'Bags', icon: '▱' },
  { name: 'Accessories', icon: '◉' },
  { name: 'Documents', icon: '▤' },
  { name: 'Other', icon: '⊞' }
]

const items = [
  {
    id: 1,
    title: 'Black Wallet',
    category: 'Accessories',
    location: 'College Library',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'
  },
  {
    id: 2,
    title: 'Blue Backpack',
    category: 'Bags',
    location: 'Main Campus',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600'
  },
  {
    id: 3,
    title: 'Wrist Watch',
    category: 'Accessories',
    location: 'Computer Lab',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'
  },
  {
    id: 4,
    title: 'Wireless Headphones',
    category: 'Electronics',
    location: 'Canteen',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
  }
]

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">📍</span>
          FindIt
        </a>

        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#recent-items">Browse Items</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <a href="#login" className="login-btn">Login</a>
          <a href="#register" className="register-btn">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${campusImage})` }}
      >
        <div className="hero-content">

          <span className="hero-tag">
            CAMPUS LOST & FOUND
          </span>

          <h1>
            Lost Something?
            <br />
            Let's <span>Find It.</span>
          </h1>

          <p>
            A simple platform to report lost items, find missing
            belongings, and help others.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search for lost belongings..."
            />

            <button type="button">Search</button>
          </div>

        </div>

        {/* Report Cards */}
        <div className="report-cards">

          <a href="#login" className="report-card lost-card">
            <span className="report-icon">⚠</span>

            <div>
              <h3>Report Lost Item</h3>
              <p>Tell us what you lost</p>
            </div>
          </a>

          <a href="#login" className="report-card found-card">
            <span className="report-icon">◇</span>

            <div>
              <h3>Report Found Item</h3>
              <p>Help return an item</p>
            </div>
          </a>

        </div>
      </section>

      {/* Categories */}
      <section className="category-section">

        <div className="section-heading">
          <h2>Browse by Category</h2>
          <a href="#recent-items">View All →</a>
        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <span className="category-icon">
                {category.icon}
              </span>

              <h3>{category.name}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* Recently Reported Items */}
      <section className="items-section" id="recent-items">

        <div className="section-heading">
          <h2>Recently Reported Items</h2>
          <a href="#browse">View All →</a>
        </div>

        <div className="items-grid">

          {items.map((item) => (
            <div className="item-card" key={item.id}>

              <div className="item-image">
                <img src={item.image} alt={item.title} />

                <span className={`item-badge ${item.type.toLowerCase()}`}>
                  {item.type}
                </span>
              </div>

              <div className="item-info">

                <h3>{item.title}</h3>

                <p>
                  <span>📍</span> {item.location}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="about">

        <a href="#" className="logo">
          <span className="logo-icon">📍</span>
          FindIt
        </a>

        <p>Helping people find their lost belongings.</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#recent-items">Browse Items</a>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>

        <p className="copyright">
          © 2026 FindIt. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default App
