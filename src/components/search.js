export const Searchbox =()=>{
  const [query, setQuery] = useState("")
  return (
    <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
    {
      dataTable.map((post, index) => {
        <div key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      })
    }
    </div>
  )
}