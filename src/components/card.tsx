import { useContext } from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { ThemeContext } from "../lib/context/ThemeContext"

const Card = styled.div`
    margin: 1vw;
    width: 65vw;
    padding: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
`

export function CardContainer({media} : any){
    const theme = useContext(ThemeContext);
    return(
        <Card style={{
                color: theme.color,
                backgroundColor: theme.backgroundColor,
                border: theme.border,
                boxShadow: theme.boxShadow
        }}>
            <CardImage src={media.coverImage.large}/>
            <CardContent id={media.id} prefer={media.title.userPreferred}/>
        </Card>  
    )
}

export function CardImage({src} : any){
    return <img src={src} alt="" />
}

export function CardContent({id, prefer} : any){
    return(
        <div style={{textAlign: "center"}}>
            <Link to={`/${id}`}>{prefer}</Link>
        </div>
    )
}

export{};