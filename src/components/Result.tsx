import { BackButton } from "./BackButton"

export const Result = ({
    text
}: {
    text: string
}) => {
    return (
        <div className="winner">
            <h1>{text}</h1>
            <BackButton />
        </div>
    )
}