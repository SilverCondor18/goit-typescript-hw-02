
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import {searchImages, GalleryImage} from '../../unsplash-api'
import ClipLoader from 'react-spinners/ClipLoader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Toaster } from 'react-hot-toast'

const loaderCss = {
  display: "block",
  margin: "0 auto"
};

type ModalInfo = {
  largeImage: string;
  description: string;
};

type SearchOperation = (query: string) => void;

function App() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({ largeImage: "", description: "" });
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const loadMore = async () => {
    setLoaderVisible(true);
    setLoadMoreVisible(false);
    setErrorVisible(false);
    try {
      const results = await searchImages(query, page);
      setImages(prevImages => [...prevImages, ...results.results]);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch(error)
    {
      setErrorVisible(true);
    }
    finally
    {
      setLoaderVisible(false);
    }
  }

  useEffect(() => {
    if (query == '')
    {
      return;
    }
    setImages([]);
    setPage(1);
    querySearch(query);
  }, [query]);

  useEffect(() => {
    if (page == 1) {
      return;
    }
    loadMore();
  }, [page]);

  const querySearch: SearchOperation = async query => {
    setLoaderVisible(true);
    setLoadMoreVisible(false);
    setErrorVisible(false);
    try {
      const results = await searchImages(query, 1);
      setImages(results.results);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch(error)
    {
      setErrorVisible(true);
    }
    finally
    {
      setLoaderVisible(false);
    }
  };

  const handleSearch: SearchOperation = query => {
    setQuery(query);
  }

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenModal: (largeImage: string, description: string) => void = (largeImage, description) => {
    setModalInfo({
      largeImage: largeImage,
      description: description
    });
    openModal();
  }

  return (
    <>
      <Toaster />
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
