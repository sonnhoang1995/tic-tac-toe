import defaultAvatar from "../assets/default-avatar.png"

interface Props {
    name: string
    score: number
    isSelected: boolean
}

const Player = ({ name, score, isSelected }: Props) => {
    return (
        <div className="player-container">
            <p className="player-name">Player {name}</p>
            <div
                className={`player-avatar-container ${
                    isSelected ? "selected-player" : "unselected-player"
                }`}
            >
                <img src={defaultAvatar} alt="Default avatar" />
            </div>
            <p className="player-score">{score}</p>
        </div>
    )
}

export default Player
