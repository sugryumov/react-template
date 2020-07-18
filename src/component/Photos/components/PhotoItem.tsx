import React from 'react';

type TPhotoItem = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: number;
};

type TPhotos = {
  photos: Array<TPhotoItem>;
  loading: boolean;
  error: null | Error;
};

function PhotoItem({ photos, loading, error }: TPhotos) {
  const renderPhotos = () => {
    return photos.slice(0, 10).map((photo: TPhotoItem) => {
      return <p key={photo.id}>{photo.title}</p>;
    });
  };

  return (
    <>
      <h1>Photos</h1>

      {loading ? 'Loading...' : error ? 'Ошибка' : renderPhotos()}
    </>
  );
}

export default PhotoItem;
