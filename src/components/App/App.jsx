
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import {searchImages} from '../../unsplash-api'
import ClipLoader from 'react-spinners/ClipLoader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const loaderCss = {
  display: "block",
  margin: "0 auto"
};

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ largeImage: "", description: "" });
  const [errorVisible, setErrorVisible] = useState(false);

  const loadMore = async () => {
    setLoaderVisible(true);
    setLoadMoreVisible(false);
    setErrorVisible(false);
    try {
      const results = await searchImages(query, page);
      setImages(prevImages => [...prevImages, ...results.results]);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch
    {
      setErrorVisible(true);
    }
    finally
    {
      setLoaderVisible(false);
    }
  }

  useEffect(() => {
    if (page == 1) {
      return;
    }
    loadMore();
  }, [page]);

  const handleSearch = async query => {
    setImages([]);
    setPage(1);
    setQuery(query);
    setLoaderVisible(true);
    setLoadMoreVisible(false);
    setErrorVisible(false);
    try {
      const results = await searchImages(query, page);
      setImages(results.results);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch
    {
      setErrorVisible(true);
    }
    finally
    {
      setLoaderVisible(false);
    }
  };

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenModal = (largeImage, description) => {
    setModalInfo({
      largeImage: largeImage,
      description: description
    });
    openModal();
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} openModal={handleOpenModal} />}
      <ClipLoader color="blue" size="150px" loading={loaderVisible} cssOverride={loaderCss} />
      {loadMoreVisible && <LoadMoreBtn onClick={loadMoreHandler} />}
      {errorVisible && <ErrorMessage />}
      <ImageModal largeImage={modalInfo.largeImage} description={modalInfo.description} closeModal={closeModal} isOpen={isModalOpen} />
    </>
  )
}

export default App
