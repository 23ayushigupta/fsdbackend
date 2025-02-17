const fs=reqire('fs');

const write=()=>{
    fs.writeFile=("./data.txt",data,(err)=>{
        if(err)
            console.log("Error Writing file",err);
        elseconsole.log("file written successfully");

    });
}
write("T am new data")