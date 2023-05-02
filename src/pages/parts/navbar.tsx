import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import { css } from "@emotion/css"

const Button = styled.button`
    padding: 10px;
    width: 30vw;
    background-color: rgb(9, 72, 173);
    font-size: 20px;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: bold;
    &:hover {
        background-color: rgb(40, 42, 46);
    }
`
const styles = {
    Main: css`
        min-width: 100%;
        background-color: rgb(9, 72, 173);
        display:flex;
        justify-content: center;
        margin-bottom: 10px;
    `,
    Sub: css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5px;
    `,
    Margin: css`
        margin: 5px;
    `
}

export default function Navbar(){
    return(
        <div className={styles.Main}>
            <div className={styles.Sub}>
                <Link to="/">
                    <Button>
                        <div className={styles.Margin}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                            </svg>
                        </div>
                        Home
                    </Button>
                </Link>
                <Link to="/Search">
                    <Button>
                        <div className={styles.Margin}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div> 
                        Search
                    </Button>
                </Link>
                <Link to="/Favourites">
                    <Button>
                        <div className={styles.Margin}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </div> 
                        Favourites
                    </Button>
                </Link>
            </div>
        </div>
    )
}