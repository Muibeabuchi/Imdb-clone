
export default function Results({results}) {

    const SingleResult   = results.map(item=>(
        <div key={item.id}>{item.original_title}</div>
    ))
  return (
    <div>{SingleResult}</div>
  )
}
