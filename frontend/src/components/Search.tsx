import {useState, useRef, useEffect} from "react"
import {useNavigate} from "react-router-dom"

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <button
        className='p-2 bg-white rounded hover:bg-gray-200'
        onClick={() => setIsOpen((prev) => !prev)}>
        <img src='./public/search.png' alt='search' className='h-6 w-6' />
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded shadow-md z-50'>
          <SearchBar closeDropdown={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}

function SearchBar({closeDropdown}: {closeDropdown: () => void}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (query.trim()) {
      navigate(`/shop?query=${encodeURIComponent(query)}`)
      closeDropdown() // Close dropdown after navigating
    }
  }

  return (
    <form className='p-4' onSubmit={handleSubmit}>
      <div className='relative'>
        <input
          type='search'
          id='search'
          className='w-full p-2 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
          placeholder='Search Mockups, Logos...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
    </form>
  )
}
