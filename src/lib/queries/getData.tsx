import { gql } from "@apollo/client"

export const GET_ALL_ANIME= gql`
    query getAllAnime($page:  Int, $perPage: Int){
        Page(page: $page , perPage: $perPage){
            media(type: ANIME, sort: SCORE_DESC){
                id
                coverImage{
                    large
                }
                title{
                  english
                  romaji
                  userPreferred
                }
                averageScore
            }
        }
    }
`

export const SEARCH_ANIME= gql`
    query searchAnime($page:  Int, $perPage: Int, $name: String){
        Page(page: $page , perPage: $perPage){
            media(search: $name, type: ANIME, sort: SCORE_DESC){
                id
                episodes
                coverImage{
                    large
                }
                title{
                  english
                  romaji
                  userPreferred
                }
                averageScore
            }
        }
    }
`

export const GET_ANIME_DETAIL= gql`
    query getAnimeDetail($id: Int){
        Media(id: $id, type: ANIME){
            id
            episodes
            coverImage{
                large
            }
            title{
                english
                romaji
                userPreferred
            }
            averageScore
            description
        }
    }
`

export{};