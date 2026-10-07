export default function PlayerCard(props) {
  return (
  <div>
    <h2>{props.name}</h2>
    <p>{props.team}</p>
    <p>{props.position}</p>
    <p>{props.age}</p>
    <p>{props.experience}</p>
    <p>{props.points}</p>
  </div>
)
}