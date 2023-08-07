type Props = {
    className: string,
    color?: string
}

const AddIcon: React.FC<Props> = ({ className, color }) => {
    return (
        <span >
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5} stroke={color ? color : "currentColor"}
                className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </span>
    )
}

export default AddIcon