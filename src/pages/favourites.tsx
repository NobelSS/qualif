import { css } from "@emotion/css";
import { CardContainer } from "../components/card";
import { useContext } from "react";
import { ThemeContext } from "../lib/context/ThemeContext";

const styles = {
    Full: css`
        min-height: 100vh;
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

export default function FavouritePage(){
    const theme = useContext(ThemeContext);
    let list = localStorage.getItem("Favourite");
    let localStorageValue = JSON.parse(list ?? "");
    return(
        <div className={styles.Full} style={{
            backgroundColor: theme.backgroundColor,
        }}> 
            <div className={styles.Full} style={{
                backgroundColor: theme.backgroundColor
            }}>
                <div className={styles.Main} style={{
                    backgroundColor: theme.backgroundColor
                }}>
                    <div className={styles.Sub} style={{
                    backgroundColor: theme.backgroundColor
                    }}>
                        {localStorageValue.length !== 0 ?
                            localStorageValue.map((fav : any) => {
                                return <CardContainer media={fav}/>
                            })
                        : (
                            <h1 style={{
                                minHeight: "100vh",
                                color: theme.color
                            }}>No Favourites</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export{};