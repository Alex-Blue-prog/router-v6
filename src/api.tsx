import axios from "axios";

const req = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const api = {
    getAlbums: async () => {
        const albums = await req.get(`/albums`);
        return albums.data;
    },
    getAlbum: async (id: string) => {
        const album = await req.get(`/albums/${id}`);
        return album.data;
    },
    getPhotos: async (id: string) => {
        const photos = await req.get(`/albums/${id}/photos`);
        return photos.data;
    },
    getPhoto: async (id: string) => {
        const photo = await req.get(`/photos/${id}`);
        return photo.data;
    }
}