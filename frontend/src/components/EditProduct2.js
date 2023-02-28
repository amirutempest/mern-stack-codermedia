import React, { useState } from 'react'

const EditProduct2 = () => {

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={updateProduct}>
                    <div className="field">
                        <label className='label'>Product Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className='input'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Image</label>
                        <div className="control">
                            <div className="file">
                                <label className="file-label">
                                    <input
                                        type="file"
                                        className='file-input'
                                        onChange={loadImage}
                                    />
                                    <span className="file-cta">
                                        <span className="file-cta">Choose a file...</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Tempat untuk menampilkan preview image */}

                    {/* preview : untuk menmpung fungsi yang menampung gambar/image */}
                    {preview ? (
                        <figure className='image is-128x128'>
                            <img 
                            src={preview} 
                            alt="Preview Image" 
                            />
                        </figure>
                    ): (
                        ""
                    )}

                    <div className="field">
                        <div className="control">
                            <button type='sumbit' className="button is-success">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct2