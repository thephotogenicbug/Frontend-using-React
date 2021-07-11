import React,{useState, useEffect} from 'react';
import axios from 'axios'

const FileSystem = () =>{
    const [userdata, updateData] = useState("");
    const [message, processMessage] = useState("");

    const save = () =>{
        var jsondata = {"textdata" :userdata};
        var url = "http://localhost:2222/savefiledata"
        axios.post(url, jsondata)
        .then(response =>{
            processMessage(response.data)
            updateData("");  // to clear the text box
            getData(); // after saving page reload
        })
        //alert(userdata);
    }

    const [filedata, getFileData] = useState("");
   const getData = () =>{
       var url = "http://localhost:2222/getfiledata";
       axios.get(url)
       .then(response =>{
           getFileData(response.data);
       })

   }

   useEffect(()=>{
       getData();
   }, [true])

   const deleteFileData = () =>{
    var url = "http://localhost:2222/deletefiledata";
    axios.get(url)
    .then(response=>{
        processMessage(response.data);
        getData();              // to refresh the list after file delete 
    })

   }

   const deleteFile = () =>{
    var url = "http://localhost:2222/deletefile";
    axios.get(url)
    .then(response=>{
        processMessage(response.data);
        getData();              // to refresh the list after file delete 
    })
   }
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12  text-center">
                    <h3 className="mb-4">File Read write using ReactJS & NodeJS</h3>
                    <p className="text-center text-success"> {message} </p>
                    <textarea className="mt-3"  
                    placeholder="Enter Your Message" 
                    className="form-control" value={userdata}
                    onChange={obj=> updateData(obj.target.value)}>
                    </textarea>
                    <div >
                        <button className="btn btn-primary m-3" onClick={save}>Save Message</button>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                <button className="btn btn-danger m-3" onClick={deleteFileData}>Clear File Data</button>
                <button className="btn btn-warning m-3" onClick={deleteFile}>Delete File</button>
                    <h2 className="mt-2">Data from File System</h2>
                    <p>{filedata}</p>
                </div>
            </div>
        </div>
    )
}
export default FileSystem;