import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { CameraOutlined } from '@ant-design/icons';
import { Img, UploadStyle } from './style';

const FileUpload = ({ updateImages }) => {
  const [images, setImages] = useState([]);

  const dropHandler = useCallback(
    (files) => {
      let formData = new FormData();
      const config = {
        header: { 'content-type': 'multipart/form-data' },
      };
      formData.append('file', files[0]);

      axios.post('api/product/image', formData, config).then((response) => {
        if (response.data.success) {
          setImages([...images, response.data.filePath]);
          updateImages([...images, response.data.filePath]);
        } else {
          alert('Error');
        }
      });
    },
    [images, updateImages],
  );

  const deleteHandler = useCallback(
    (img) => {
      const currentIndex = images.indexOf(img);
      const newArr = [...images];
      newArr.splice(currentIndex, 1);
      setImages(newArr);
      updateImages(newArr);
    },
    [images, updateImages],
  );

  return (
    <UploadStyle>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="files">
            <input {...getInputProps()} />
            <div>
              <CameraOutlined />
              <p>{images.length}개의 사진</p>
            </div>
          </div>
        )}
      </Dropzone>
      <Img>
        {images.map((img, index) => (
          <div key={index} onClick={() => deleteHandler(img)}>
            <img src={`http://localhost:5000/${img}`} alt={`${img}`} />
          </div>
        ))}
      </Img>
    </UploadStyle>
  );
};

export default FileUpload;
