
export default function Dev({image,title,desc}) {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <img src={require({image})} alt="Dev Tools" />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
