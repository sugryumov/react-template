import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces';
import { fetchPhotosAction } from './store/actions';
import {
  getPhotosData,
  getPhotosLoading,
  getPhotosError,
} from 'common/selectors/photos';
import PhotoItem from './components/PhotoItem';
import './index.css';

function PhotosContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotosAction.request());
  }, [dispatch]);

  const { photos, loading, error } = useSelector((state: IState) => ({
    photos: getPhotosData(state),
    loading: getPhotosLoading(state),
    error: getPhotosError(state),
  }));

  return (
    <>
      <Helmet title={'Photos'} />

      <main className="photos">
        <div className="container">
          <PhotoItem photos={photos} loading={loading} error={error} />
        </div>
      </main>
    </>
  );
}

export default PhotosContainer;
