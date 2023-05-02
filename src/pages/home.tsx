import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../lib/queries/getData";
import { CardContainer } from "../components/card";
import { css } from "@emotion/css";
import { useContext } from "react";
import { ThemeContext } from "../lib/context/ThemeContext";

const styles = {
    Full: css`
        min-height: 100vh;
        text-align: center;
    `,
    Main: css`
        display: flex;
        justify-content: center;
    `,
    Sub: css`
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
        column-gap: 1rem;
    `
}

export default function HomePage(){
    const theme = useContext(ThemeContext);
    const {loading, error, data} = useQuery(GET_ALL_ANIME,{
        variables:{
            page: 1,
            perPage: 50
        }
    })
    if(loading) return <h1 className={styles.Full}>LOADING</h1>
    if(error) return <h1 className={styles.Full}>Error: {error.message}</h1>
    return(
        <div className={styles.Main} style={{
            backgroundColor: theme.backgroundColor
        }}>
            <div className={styles.Sub} style={{
                backgroundColor: theme.backgroundColor
            }}>
                {data.Page.media.map((media : any, index : any) => {
                    return <CardContainer media={media} />
                })}
            </div>
        </div>
    )
}

export{};