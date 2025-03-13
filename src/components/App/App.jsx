import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import {searchImages} from '../../unsplash-api'
import { nanoid } from 'nanoid';
import ClipLoader from 'react-spinners/ClipLoader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Modal from 'react-modal'

import { useState, useEffect, CSSProperties } from 'react';
import ImageModal from '../ImageModal/ImageModal';

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
  const [modalInfo, setModalInfo] = useState({largeImage: "", description: ""});

  const loadMore = async () => {
    setLoaderVisible(true);
    setLoadMoreVisible(false);
    try {
      const results = await searchImages(query, page);
      setImages(prevImages => [...prevImages, ...results.results]);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch (error)
    {
      console.log(error);
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
    try {
      const results = await searchImages(query, page);
      setImages(results.results);
      setLoadMoreVisible(page < results.total_pages);
    }
    catch (error)
    {
      console.log(error)
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
      {loadMoreVisible && <LoadMoreBtn currentPage={page} onClick={loadMoreHandler} />}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} >
        <ImageModal largeImage={modalInfo.largeImage} description={modalInfo.description} />
      </Modal>
    </>
  )
}

export default App
