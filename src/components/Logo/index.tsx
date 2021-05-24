import LogoUrl from '../../resources/homelove.jpg';
type logoProps = {
    width: number
}

const Logo: React.FC<logoProps> = () =>{
    return(
        <>
        <img  src={LogoUrl}/>
        </>
    )
}
export default Logo
