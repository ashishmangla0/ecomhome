type iconProps = {
    name: string
}
const Icon : React.FC<iconProps> = ({name}) =>{
return (
    <span className={`icon icon-${name}`} aria-hidden="true"></span>
)
}

export default Icon;