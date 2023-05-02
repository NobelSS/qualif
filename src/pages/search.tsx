import { useQuery } from "@apollo/client"
import { SEARCH_ANIME } from "../lib/queries/getData"
import { CardContainer } from "../components/card"
import { SearchBar } from "./parts/searchbar"
import { useContext, useState } from "react";
import { ThemeContext } from "../lib/context/ThemeContext";
import { css } from "@emotion/css";

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

export default function SearchPage(){
    const theme = useContext(ThemeContext);
    let [title, setTitle] = useState<String>("");

    const handleSearch = (searching : String) => {
        setTitle(searching);
    };
    
    const {loading, error, data} = useQuery(SEARCH_ANIME,{
        variables:{
            page: 1,
            perPage: 50,
            name: title
        }
    })
    if(loading) return <h1 className={styles.Full}>LOADING</h1>
    if(error) return <h1 className={styles.Full}>Error: {error.message}</h1>
    return(
        <div className={styles.Full} style={{
            backgroundColor: theme.backgroundColor,
        }}>   
            <SearchBar onSearch={handleSearch}></SearchBar>
            <div className={styles.Main} style={{
                backgroundColor: theme.backgroundColor,
            }}>
                
                <div className={styles.Sub} style={{
                    backgroundColor: theme.backgroundColor,
                }}>
                    
                    {data.Page.media.map((media : any, index : any) => {
                        return <CardContainer media={media} />
                    })}
                </div>
            </div>
        </div>
    )
}

export{};