import { useParams } from 'react-router-dom'
import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '../lib/queries/getData';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../lib/context/ThemeContext';

const styles = {
  Full: css`
    min-height: 100vh;
    text-align: center;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  `,
  image: css`
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 16px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
  `,
  score: css`
    font-size: 18px;
    margin-bottom: 8px;
  `,
  episodes: css`
    font-size: 18px;
    margin-bottom: 16px;
  `,
  synopsis: css`
    font-size: 16px;
    text-align: justify;
  `,
  button: css`
    padding: 8px 16px;
    background-color: rgb(9, 72, 173);
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `
};

function reWrite(text: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.body.textContent || '';
  }

export default function DetailPage(){
  const theme = useContext(ThemeContext);
    let localStorageValue: Array<string> = [];
    let list = localStorage.getItem("Favourite");

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const toggleFavorite = () => {
        if(!isFavorite){
          if(!list){
            localStorageValue = [];
          }
          else{
            localStorageValue = JSON.parse(list);
            localStorageValue = localStorageValue.filter((e: any) => JSON.stringify(e) !== JSON.stringify(data.Media))
            localStorage.setItem("Favourite", JSON.stringify(localStorageValue))
          }
          localStorageValue = [...localStorageValue, data.Media];
          localStorage.setItem("Favourite", JSON.stringify(localStorageValue));
        }
        else{
          if(!list){
            localStorageValue = [];
          }
          else{
            localStorageValue = JSON.parse(list);
          }
          localStorageValue = localStorageValue.filter((e: any) => JSON.stringify(e) !== JSON.stringify(data.Media))
          localStorage.setItem("Favourite", JSON.stringify(localStorageValue))
        }
        setIsFavorite(!isFavorite);
    };

    let {animeId} = useParams()
    const {loading, error, data} = useQuery(GET_ANIME_DETAIL,{
        variables:{
            id: animeId
        }
    })

    useEffect(() => {
      if (typeof window !== "undefined" && window.localStorage) {
        let content = localStorage.getItem("Favourite");
        if (content) {
          if (content.includes(JSON.stringify(data?.Media))) {
            setIsFavorite(true);
          }
        }
      }
    }, [data]);

    if(loading) return <h1 className={styles.Full}>LOADING</h1>
    if(error) return <h1 className={styles.Full}>Error: {error.message}</h1>
    var synopsis = reWrite(data.Media.description);
    return (
        <div className={styles.container} style={{
            color: theme.color,
            backgroundColor: theme.backgroundColor,
        }}>
            <img src={data.Media.coverImage.large} alt={data.Media.title.userPreferred} className={styles.image} />
            <h1 className={styles.title}>{data.Media.title.userPreferred}</h1>
            <p className={styles.score}>Score: {data.Media.averageScore}⭐</p>
            <p className={styles.episodes}>Episodes: {data.Media.episodes}</p>
            <p className={styles.synopsis}>{synopsis}</p>
            <button className={styles.button} onClick={toggleFavorite}>
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}

export{};