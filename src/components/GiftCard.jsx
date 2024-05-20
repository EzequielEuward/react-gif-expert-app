

export const GiftCard = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p className="p">{title}</p>
    </div>
  )
}

export default GiftCard
