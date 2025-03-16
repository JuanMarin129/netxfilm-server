

# NETXFILM

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here](www.your-github-url-here.com)

# Server Structure

## Collections

### games

```watchMovies
{
  id,
  title,
  imagen,
  rating,
  watch,
  movieIdAPI
}
```


## Used API Endpoints in the App

| HTTP Method | URL                         | Request Body                 | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------------------------------------------------------- |
| GET         | `/watchMovies?watch=false`  |                              | Películas pendientes                                           |
| GET         | `/watchMovies?watch=true`   |                              | Películas ya vistas                                            |
| POST        | `/watchMovies`              | { rating, watch, movieIdAPI }| Para crear una nueva película                                  |
| PATCH       | `/watchMovies/:movieId`     |   { rating, watch }          | Actualiza los datos de la película                             |
| DELETE      | `/watchMovies/:movieId`     |             n/a              | Elimina la película                                            |

 
## Links

### Collaborators

[Developer 1 name](https://github.com/JuanMarin129)


### Project

[Repository Link Client](https://github.com/JuanMarin129/netxfilm-client)

[Repository Link Server](https://github.com/JuanMarin129/netxfilm-server)

[Deploy Link](https://nextfilmproject.netlify.app/)

### Warframes
[Excalidraw](https://excalidraw.com/#json=EOUzN4sBX_ND6iVEVN0Hf,capii3bCfSZ-X7A40CTMbA)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1vJuX_MjmYOzZiOJfmLiWf85LpBFUTQD6dRE_HTiFxuc/edit?usp=sharing)
