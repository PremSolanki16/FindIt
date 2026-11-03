import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BrowseItems.css'
import Logo from '../components/Logo';

const items = [
  {
    id: 1,
    title: 'Black Backpack',
    location: 'Central Library',
    date: '2025-01-15',
    category: 'Bags',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600'
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    location: 'CSE Block',
    date: '2025-01-14',
    category: 'Electronics',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600'
  },
  {
    id: 3,
    title: 'Student ID Card',
    location: 'Admin Block',
    date: '2025-01-14',
    category: 'Documents',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600'
  },
  {
    id: 4,
    title: 'Water Bottle',
    location: 'Sports Complex',
    date: '2025-01-13',
    category: 'Other',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600'
  },
  {
    id: 5,
    title: 'Laptop',
    location: 'Computer Lab',
    date: '2025-01-12',
    category: 'Electronics',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600'
  },
  {
    id: 6,
    title: 'Keys',
    location: 'Cafeteria',
    date: '2025-01-12',
    category: 'Accessories',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600'
  },
  {
    id: 7,
    title: 'Wallet',
    location: 'Library Entrance',
    date: '2025-01-11',
    category: 'Accessories',
    type: 'Lost',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'
  },
  {
    id: 8,
    title: 'Spectacles',
    location: 'Lecture Hall - 2',
    date: '2025-01-10',
    category: 'Accessories',
    type: 'Found',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600'
  }
]

function BrowseItems() {
  const [search, setSearch] = useState('')
  const [showLost, setShowLost] = useState(true)
  const [showFound, setShowFound] = useState(true)
  const [category, setCategory] = useState('All Categories')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [sort, setSort] = useState('newest')

  const filteredItems = items
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        (item.type === 'Lost' && showLost) ||
        (item.type === 'Found' && showFound)

      const matchesCategory =
        category === 'All Categories' || item.category === category

      const matchesFromDate = !fromDate || item.date >= fromDate
      const matchesToDate = !toDate || item.date <= toDate

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesFromDate &&
        matchesToDate
      )
    })
    .sort((a, b) =>
      sort === 'newest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    )

  return (
    <div className="browse-page">

      {/* Navbar */}
      <nav className="browse-navbar">

        <Logo />

        <div className="browse-nav-links">
          <Link to="/" className="browse-nav-link">
            <span>⌂</span> Home
          </Link>

          <Link to="/browse" className="browse-nav-link browse-active">
            <span>▣</span> Browse Items
          </Link>

          <Link to="/login" className="browse-nav-link">
            <span>⊕</span> Report Item
          </Link>

          <Link to="/login" className="browse-nav-link">
            <span>▦</span> Dashboard
          </Link>

          <Link to="/login" className="browse-nav-link">
            <span>♧</span> Notifications
          </Link>

          <Link to="/login" className="browse-avatar">
            <span>👤</span>
          </Link>
        </div>

      </nav>

      {/* Main Content */}
      <main className="browse-container">

        {/* Page Heading */}
        <div className="browse-heading">
          <h1>
            Browse Lost & Found <span>Items</span>
          </h1>

          <p>
            Search, filter and explore lost and found items on your campus.
          </p>
        </div>

        {/* Search Bar */}
        <div className="browse-search">

          <span className="browse-search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search for items (e.g. wallet, ID card, laptop)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="button">
            Search
          </button>

        </div>

        {/* Browse Content */}
        <div className="browse-content">

          {/* Filters Sidebar */}
          <aside className="filter-sidebar">

            <h2>
              <span>⚲</span> Filters
            </h2>

            <div className="filter-divider"></div>

            {/* Item Status */}
            <div className="filter-group">

              <h3>Item Status</h3>

              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={showLost}
                  onChange={(e) => setShowLost(e.target.checked)}
                />
                <span className="custom-checkbox"></span>
                Lost Items
              </label>

              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={showFound}
                  onChange={(e) => setShowFound(e.target.checked)}
                />
                <span className="custom-checkbox"></span>
                Found Items
              </label>

            </div>

            <div className="filter-divider"></div>

            {/* Category */}
            <div className="filter-group">

              <h3>Category</h3>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Bags</option>
                <option>Accessories</option>
                <option>Documents</option>
                <option>Other</option>
              </select>

            </div>

            {/* Date Range */}
            <div className="filter-group date-filter">

              <h3>Date Range</h3>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                aria-label="From date"
              />

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                aria-label="To date"
              />

            </div>

            <div className="filter-divider"></div>

            <button
              className="apply-filter-btn"
              onClick={() => {}}
            >
              Apply Filters
            </button>

            <button
              className="clear-filter-btn"
              onClick={() => {
                setShowLost(true)
                setShowFound(true)
                setCategory('All Categories')
                setFromDate('')
                setToDate('')
                setSearch('')
              }}
            >
              Clear All
            </button>

          </aside>

          {/* Items Section */}
          <section className="browse-results">

            <div className="results-header">

              <p>
                Showing <strong>{filteredItems.length}</strong> items
              </p>

              <div className="sort-box">
                <label htmlFor="sortItems">Sort by:</label>

                <select
                  id="sortItems"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

            </div>

            {/* Item Cards */}
            <div className="browse-items-grid">

              {filteredItems.map((item) => (
                <div className="browse-item-card" key={item.id}>

                  <div className="browse-item-image">

                    <img src={item.image} alt={item.title} />

                    <span
                      className={`browse-item-badge ${item.type.toLowerCase()}`}
                    >
                      {item.type}
                    </span>

                  </div>

                  <div className="browse-item-info">

                    <h3>{item.title}</h3>

                    <p>
                      <span>♧</span> {item.location}
                    </p>

                    <p>
                      <span>▢</span>{' '}
                      {new Date(item.date + 'T00:00:00').toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }
                      )}
                    </p>

                    <Link
                      to="/login"
                      className="view-details-link"
                    >
                      View Details →
                    </Link>

                  </div>

                </div>
              ))}

              {filteredItems.length === 0 && (
                <div className="no-items-found">
                  <h3>No items found</h3>
                  <p>Try changing your search or filters.</p>
                </div>
              )}

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default BrowseItems