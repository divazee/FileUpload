import React, { useState } from 'react';
import axios from 'axios'
import path from 'path'


const dirPath = path.join(__dirname)


    const Button = () => { 
        const [selectedFile, setSelectedFile] = useState(null)
        const [ file, setFile ] = useState('')
        const [ filename, setFilename ] = useState('Choose File')
        const [logger,setlogger] = useState('My name is williams')

        // const chooseFile = (e) => {
        //     console.log("object2")
        //     setFile(e.target.files[0])
        //     setFilename(e.target.files[0].name)
        //     // console.log("object:::::", __dirname)
        // }

        // const handleUpload = async (e) => {
        //     console.log("object")
        //     // const formData = new FormData();
        //     // formData.append('file', file);

        //     console.log("file selected", file)

        //     // try {
        //         // const result = await axios({
        //         //     method: 'POST',
        //         //     url: `https://www.googleapis.com/upload/drive/v3/files?uploadType=media`,
        //         //     file,
        //         //     headers: {
        //         //         // 'Authorization': `Bearer ${}`,
        //         //         'Content-Type': 'image/jpeg',
        //         //         'Content-Length':  500000
        //         //     }
        //         // })
        //         // console.log("object33:::", result)
        //     // } catch (e) {
        //     //     console.log("error::", e)

        //     // }
            
        // }


        const chooseFile = (e)=>{
            setFilename(e.target.files[0].name)
           // setlogger( JSON.stringify(e.target.files[0]))
            console.log(e.target.files[0])
            setSelectedFile(e.target.files[0])
        }
        const onClickHandler =  () =>{
            const data = new FormData() 
            data.append('file', selectedFile)
              axios.post("http://localhost:4000/upload", data, { // receive two parameter endpoint url ,form data 
        })
                .then(res => { // then print response status
                console.log(res.statusText)
                })
                .catch(err => {
                    console.log(err)
                })
             
        }

        
    
        return ( 
            <div>

              
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="ctrl" onChange={chooseFile} />
                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                </div>

                <div className="">
                    <button type="submit" onClick={onClickHandler}>Upload</button>
                </div>
            </div>
         );
    }

 
export default Button;