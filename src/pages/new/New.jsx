import React, { useState } from 'react';
import './new.scss';
import Sidebar from'../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {

    const [file, setFile] = useState("");
    // console.log(file);
    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file 
                            ? URL.createObjectURL(file) 
                            : "https://media.istockphoto.com/vectors/no-photo-available-vector-icon-default-image-symbol-picture-coming-vector-id1354776450?k=20&m=1354776450&s=612x612&w=0&h=hnTHv1X0Fu4viDTpJmBoJipQwoslNJbzVuF8IqI9vgY="} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file"> Add Image: <DriveFolderUploadIcon className='icon'/> </label>
                                <input type="file" id='file' style={{display: 'none'}} 
                                onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                            {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label htmlFor="">{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                            </div>
                            ))}
                            
                            
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;