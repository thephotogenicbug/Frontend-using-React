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
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12  text-center">
                    <h3 className="mb-4">File Read write using React & NodeJS</h3>
                    <p className="text-center text-success"> {message} </p>
                    <textarea className="mt-3"  
                    placeholder="Enter Your Message" 
                    className="form-control" value={userdata}
                    onChange={obj=> updateData(obj.target.value)}>
                    </textarea>
                    <div >
                        <button className="btn btn-primary mt-4" onClick={save}>Save Message</button>
                    </div>
                </div>
                <div className="col-md-12">
                    <h2>Data from File System</h2>
                    <p>{filedata}</p>
                </div>
            </div>
        </div>
    )
}
export default FileSystem;