export default function MoodCard({ mood }) {

return(

<div className="mood-card">

<div className="mood-card__label">
Current Mood Analysis
</div>

<div className="mood-card__value">
{mood}
</div>

</div>

)

}