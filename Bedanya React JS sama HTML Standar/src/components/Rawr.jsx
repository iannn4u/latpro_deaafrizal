export default function Rawr(props) {
  return (
    <div className="mt-5">
      <h1>{props.test}</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}