import './card.style.css'

export const Card = (props) => {
    return (
        <div className="card bg-secondary mt-50 card-monster">
            <img src={`https://robohash.org/set_set2/${props.monster.id}?size=180x180`} alt="monster"/>
                <div className="card-body">
                    <h3 className="card-title m-10" >{props.monster.name}</h3>
                    <p className="card-text">{props.monster.email}</p>
                </div>
        </div>
    );
}