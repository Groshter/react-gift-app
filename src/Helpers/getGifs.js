
export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=p7biw9PfpbZcn8Jsnb1nEaK0ISAiXE3L`;
    const Respuesta = await fetch(url);
    const {data} = await Respuesta.json();

    const gifs = data.map(img =>{
        return{
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}