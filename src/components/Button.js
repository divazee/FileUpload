import React, { useState } from 'react';
import axios from 'axios'
import path from 'path'


const dirPath = path.join(__dirname)


    const Button = () => { 
        const [ file, setFile ] = useState('')
        const [ filename, setFilename ] = useState('Choose File')

        const chooseFile = (e) => {
            setFile(e.target.files[0])
            setFilename(e.target.files[0].name)
        }

        const handleUpload = async (e) => {
            console.log("object")
            const formData = new FormData();
            formData.append('file', file);

            console.log("file selected", file)

            try {
                const result = await axios({
                    method: 'POST',
                    url: `https://www.googleapis.com/upload/drive/v3/files?uploadType=media`,
                    formData,
                //     headers: {
                //         // 'Authorization': `Bearer ${}`,
                //         'Content-Type': 'image/jpeg',
                //         'Content-Length':  500000
                //     }
                })
                console.log("object33:::", result)
            } catch (e) {
                console.log("error::", e)

            }
            
        }
    
        return ( 
            <div>
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="ctrl" onChange={chooseFile} />
                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                </div>

                <div className="">
                    <button type="submit" onClick={handleUpload}>Upload</button>
                </div>
            </div>
         );
    }

 
export default Button;